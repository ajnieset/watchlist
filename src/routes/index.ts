import Router, { Response, Request, NextFunction } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('index', {title: 'Watchlist', message: 'Welcome to the Movie'});
});

export {
    router as indexRouter
};
