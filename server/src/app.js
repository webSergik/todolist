import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import { routers } from './routers.js';
import { errorsMiddleware } from './middlewares/errors.middleware.js';

const app = express();

app.use(express.json({ limit: '30mb' }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));

app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(morgan('combined'));

app.use(cookieParser());

app.use('/v1', routers);

app.use(errorsMiddleware);

export { app };
