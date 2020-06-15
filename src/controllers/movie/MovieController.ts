import { Request, Response } from 'express';
import { BaseController } from '../BaseController';
import Movie from '../../models/movie';

export class MovieController extends BaseController {
    public create(req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>): void {
        console.log(req.body.title);
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