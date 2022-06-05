import express from 'express';

import { authRouter } from './components/auth/auth.router.js';
import { userRouter } from './components/user/user.router.js';
import { todosRouter } from './components/todos/todos.router.js';

const routers = express.Router();

routers.use('/auth', authRouter);
routers.use('/users', userRouter);
routers.use('/todos', todosRouter);

export { routers };
