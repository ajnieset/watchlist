import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';

import { indexRouter } from './routes';

const app: Application = express();
const port: number = 3000;

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(express.json());

//routing
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`App is listing on ${port}`)
});