import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
import mongoose, { Connection } from 'mongoose';

import { movieRouter } from './routes/routes';

const app: Application = express();
const port: number = 3000;

//DB connection
const connection: string = 'mongodb://127.0.0.1:27017/movie';
mongoose.connect(connection, { useNewUrlParser: true, useUnifiedTopology: true });
const db: Connection = mongoose.connection;

db.on('error', (error: string) => {console.log(error)});
db.on('open', () => {console.log(`Connected to MongoDB`)});

// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

app.use(express.json());

//routing
app.use('/', movieRouter);

app.listen(port, () => {
    console.log(`App is listing on ${port}`)
});