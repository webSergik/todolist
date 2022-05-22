import express from 'express';
// import { checkSchema } from 'express-validator';

import * as userController from './user.controller.js';
// import * as schema from './auth.validator.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const userRouter = express.Router();

userRouter.post('/me', authMiddleware, userController.getUserInfo);

export { userRouter };
