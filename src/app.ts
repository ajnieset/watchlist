import express, { Application } from 'express';
import path from 'path';

const app:Application = express();
const port: number = 3000;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());

app.listen(port, () => {
    console.log(`App is listing on ${port}`)
});