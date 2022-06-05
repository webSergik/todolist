import express from 'express';

import * as todosController from './todos.controller.js';
import authMiddleware from '../../middlewares/auth.middleware.js';

const todosRouter = express.Router();

todosRouter.post('/', authMiddleware, todosController.createTodo);

export { todosRouter };
