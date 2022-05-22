import express from 'express';
import { checkSchema } from 'express-validator';

import * as authController from './auth.controller.js';
import * as schema from './auth.validator.js';

const authRouter = express.Router();

authRouter.get('/refresh', authController.refresh);
authRouter.get('/activate/:link', authController.activate); // TODO может все же код?
authRouter.post('/logout', authController.logout); // TODO Может get?
authRouter.post('/signup', checkSchema(schema.signUp), authController.signUp);
authRouter.post('/signin', authController.signIn);

export { authRouter };
