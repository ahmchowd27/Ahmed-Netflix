import express from "express";
import {
  getTrendingMovie,
  getTopTrendingMovies, // Assume you've added this function
  getMovieTrailers,
  getMovieDetails,
  getSimilarMovies,
  getMoviesByCategory,
} from "../controllers/movie.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();

// Add public route for top trending movies before applying protectRoute middleware
router.get("/trending/top", getTopTrendingMovies);

// Apply the protectRoute middleware to all subsequent routes
router.use(protectRoute);

router.get("/trending", getTrendingMovie);
router.get("/:id/trailers", getMovieTrailers);
router.get("/:id/details", getMovieDetails);
router.get("/:id/similar", getSimilarMovies);
router.get("/:category", getMoviesByCategory);

export default router;
