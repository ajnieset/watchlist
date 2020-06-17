import Router, { Response, Request, NextFunction, json } from 'express';
import { MovieController } from '../controllers/movie/MovieController';

const router = Router();
const movieController = new MovieController();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {title: 'Watchlist', message: 'Welcome to the Movie'});
});

router.get('/movies', (req: Request, res: Response) => {
    movieController.read(req, res);
});

router.get('/movies/add', (req: Request, res: Response) => {
    res.render('createMovie');
});

router.post('/movies/add', (req: Request, res: Response) => {
    movieController.create(req, res);
});

router.get('/movies/view/:id', (req: Request, res: Response) => {
    movieController.show(req, res);
});

router.post('/movies/view/:id', (req: Request, res: Response) => {
    movieController.update(req, res);
});

router.delete('/movies/', (req: Request, res: Response) => {
    movieController.delete(req, res);
});

export {
    router as movieRouter
};
