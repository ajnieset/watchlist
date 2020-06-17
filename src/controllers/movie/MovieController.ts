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
        Movie.find({}, (err, watchlist) => {
            res.render('movie', {watchlist})
        });
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        let updateMovie: MovieInterface = new Movie({
            title: req.body.title,
            director: req.body.director ? req.body.director : "Unknown",
            description: req.body.description ? req.body.description : "None",
            date_watched: req.body.date_watched ? req.body.date_watched : null,
            genre: req.body.genre,
            austin_rating: req.body.austin_rating,
            connor_rating: req.body.connor_rating,
            _id: req.params.id
        });

        Movie.findByIdAndUpdate(req.params.id, updateMovie, {}, (err, movie) => {
            if (err) {
                console.log(err);
                res.redirect('/movies');
            }
            if (movie) {
                console.log(`${movie.title} has been successfully updated`);
                res.redirect(`/movies/view/${movie._id}`);
            }
            if (!movie) console.log('No movie has been updated');
        });
    }
    public show(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        Movie.findById(req.params.id, (err, movie) => {
            res.render('viewMovie', {movie});
        });
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        throw new Error("Method not implemented.");
    }
    
}