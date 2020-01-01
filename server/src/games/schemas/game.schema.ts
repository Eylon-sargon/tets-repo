import * as mongoose from 'mongoose';

export const GameSchema = new mongoose.Schema({
  // New
  status: String,
  updatedTs: Number,
  // From Scraper
  appId: String,
  url: String,
  headerImage: String,
  title: String,
  description: String,
  minInstalls: Number,
  score: Number,
  ratings: Number,
  reviews: Number,
  free: Boolean,
  developerEmail: String,
  developerWebsite: String,
  genre: String,
  genreId: String,
  released: String,
  updated: String,
});
