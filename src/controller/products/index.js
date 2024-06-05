import { Op } from 'sequelize';
import CategoryModel from '../../model/products/category.js';
import ProductsModel from '../../model/products/products.js';

const ProductsController = {
  getAllProducts: async (req, res) => {
    try {
      // const category = await CategoryModel.findOne({ where: { id: 4 } });

      // const { categoryName } = req.query;
      const products = await ProductsModel.findAll({
        include: [
          {
            model: CategoryModel,
            attributes: ['name'],
            where: {
              [Op.or]: [{ name: 'shirts' }, { name: 'men' }],
            },
          },
        ],
      });

      if (!products) {
        res.status(404).json({ message: 'Products not Found!' });
      }

      res.status(200).json({ message: 'Sales Data Found', data: products });
    } catch (error) {
      console.log('Error while fetching the Sales', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  getSingleProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const prodcut = await ProductsModel.findByPk(id);

      if (!prodcut) {
        res
          .status(404)
          .json({ message: `No Product Found with this ID:${id}` });
      }
      res.status(200).json({ message: 'Poduct Data Found', data: prodcut });
    } catch (error) {
      console.log('Error while fetching A Single Product', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  addProduct: async (req, res) => {
    try {
      const payload = req.body;
      const { categories, name, stock, rate } = payload;

      const prodcut = await ProductsModel.create({
        name,
        stock,
        rate,
      });

      await prodcut.addCategories(categories);

      res.status(200).json({
        message: 'Product Added successfully',
        data: prodcut,
      });
    } catch (error) {
      console.log('Error creating a new Product', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  UpdateProduct: async (req, res) => {
    const { id } = req.params;
    const payload = req.body;
    const { name, stock, rate } = payload;

    try {
      const prodcut = await ProductsModel.findByPk(id);
      if (!prodcut) {
        return res
          .status(404)
          .json({ message: `Requested Product not found for ID No:${id}` });
      }

      await prodcut.update({
        name,
        stock,
        rate,
      });

      res.status(200).json({
        message: `Product with ID No:${id} updated successfully`,
        UpdatedProduct: prodcut,
      });
    } catch (error) {
      console.error(`Error while updating Product with ID No:${id}`, error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;

      const prodcut = await ProductsModel.findByPk(id);

      if (!prodcut) {
        return res.status(404).json({
          message: `Requested Product to be Deleted not found for ID No:${id}`,
        });
      }

      await prodcut.destroy();

      res.json({
        message: `Product with ID ${id} deleted successfully`,
        deletedProduct: prodcut,
      });
    } catch (error) {
      console.error(`Error while deleting a product`, error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};
export default ProductsController;
