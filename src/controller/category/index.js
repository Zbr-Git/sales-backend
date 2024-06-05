import CategoryModel from '../../model/products/category.js';

const CategoryController = {
  getAllCategories: async (req, res) => {
    try {
      const categories = await CategoryModel.findAll();

      if (!categories) {
        res.status(404).json({ message: 'Categories not Found!' });
      }

      res
        .status(200)
        .json({ message: 'Categories Data Found', data: categories });
    } catch (error) {
      console.log('Error while fetching the Categories', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  getSingleCategory: async (req, res) => {
    try {
      const { id } = req.params;
      const category = await CategoryModel.findByPk(id);

      if (!category) {
        res
          .status(404)
          .json({ message: `No Category Found with this ID:${id}` });
      }
      res.status(200).json({ message: 'Category Data Found', data: category });
    } catch (error) {
      console.log('Error while fetching A Single Category', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },

  addCategory: async (req, res) => {
    try {
      const payload = req.body;
      const { name } = payload;

      const category = await CategoryModel.create({ name });

      res.status(200).json({
        message: 'Product Added successfully',
        data: category,
      });
    } catch (error) {
      console.log('Error creating a new Product', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  UpdateCategory: async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const category = await CategoryModel.findByPk(id);
      if (!category) {
        return res
          .status(404)
          .json({ message: `Requested Category not found for ID No:${id}` });
      }

      await category.update({ name });

      res.status(200).json({
        message: `Category with ID No:${id} updated successfully`,
        UpdatedCategory: category,
      });
    } catch (error) {
      console.error(`Error while updating Category with ID No:${id}`, error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const { id } = req.params;

      const category = await CategoryModel.findByPk(id);

      if (!category) {
        return res.status(404).json({
          message: `Requested Category to be Deleted not found for ID No:${id}`,
        });
      }

      await category.destroy();

      res.json({
        message: `Category with ID ${id} deleted successfully`,
        deletedProduct: category,
      });
    } catch (error) {
      console.error(`Error while deleting a product`, error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  },
};
export default CategoryController;
