import { Request, Response } from 'express';
import { BaseController } from '../BaseController';
import Movie, { MovieInterface } from '../../models/movie';

export class MovieController extends BaseController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        let newMovie: MovieInterface = new Movie({
            title: req.body.title,
            director: req.body.director ? req.body.director : "Unknown",
            description: req.body.description ? req.body.description : "None",
            date_watched: req.body.date_watched ? req.body.date_watched : null,
            genre: req.body.genre,
            austin_rating: req.body.austin_rating,
            connor_rating: req.body.connor_rating
        });

        newMovie.save((err, movie) => {
            if (err) console.log(err);
            console.log(`${movie.title} has been successfully inserted`);
        });

        res.render('createMovie');
    }
    public read(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        Movie.find({}, (err, watchlist) => {res.render('movie', watchlist[0])});
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }
    
}