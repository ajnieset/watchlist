import mongoose, { Schema, Document } from 'mongoose';

export interface MovieInterface extends Document {
    title: string,
    director: string,
    description: string,
    genre: string,
    date_watched: Date,
    date_released: Date,
    rating: number,
}

const MovieSchema: Schema = new Schema({
    title: {type: String, required: true},
    director: {type: String},
    description: {type: String},
    genre: {type: String, required: true},
    date_watched: {type: Date, required: true, default: Date.now()},
    date_released: {type: Date},
    rating: {type: Number},
});

export default mongoose.model<MovieInterface>('Movie', MovieSchema, 'watchlist');