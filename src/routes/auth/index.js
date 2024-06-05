import { Router } from 'express';
import AuthController from '../../controller/auth/index.js';
import { validateSignin, validateUser } from '../../middleware/index.js';

const authRoute = Router();

authRoute.post('/auth/signup', validateUser, AuthController.signup);
authRoute.post('/auth/signin', validateSignin, AuthController.signin);

export default authRoute;
