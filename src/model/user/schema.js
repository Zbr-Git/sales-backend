import Joi from 'joi';

export const signupSchema = Joi.object({
  firstName: Joi.string().min(4).max(20).required(),
  lastName: Joi.string().min(3).max(20).required(),
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
    'string.pattern.base':
      '"password" must be alphanumeric and between 3 and 30 characters long',
  }),
});

export const signinSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: { allow: ['com', 'net'] },
  }),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).messages({
    'string.pattern.base':
      '"password" must be alphanumeric and between 3 and 30 characters long',
  }),
});
