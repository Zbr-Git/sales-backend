import jwt from 'jsonwebtoken';

import TokenModel from '../Model/Token/token.js';
import { signinSchema, signupSchema } from '../model/user/schema.js';

export const isAuthenticated = async (req, res, next) => {
  let token = req.headers.authorization;
  if (!token) res.status(401).json({ message: 'Token Verfication Failed!' });
  token = token.replace('Bearer ', '');

  const dbtoken = await TokenModel.findOne({
    where: {
      token: token,
    },
  });
  if (!dbtoken)
    res.status(401).json({ message: 'Token Verfication Failed for DB TOKEN!' });

  try {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) {
        if (err.name === 'TokenExpiredError') {
          return res.status(401).json({ message: 'Token has expired.' });
        } else {
          return res.status(401).json({ message: 'Invalid token.' });
        }
      }

      req.userId = decoded.id;
      req.firstName = decoded.firstName;
      req.email = decoded.email;

      next();
    });
  } catch (err) {
    console.log(err);
    res.status(401).json({ message: 'Authorisation Failed!' });
  }
};

export const validateUser = (req, res, next) => {
  const userData = req.body;
  // Validate user data against userSchema
  const { error } = signupSchema.validate(userData);
  if (error) res.status(400).json({ error: error.details[0].message });
  next();
};

export const validateSignin = (req, res, next) => {
  const { error } = signinSchema.validate(req.body);

  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    next();
  }
};
