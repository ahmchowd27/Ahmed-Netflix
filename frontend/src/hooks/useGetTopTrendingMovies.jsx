import { useEffect, useState } from "react";
import axios from "axios";

const useGetTopTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get("/api/v1/movie/trending/top");
        setMovies(response.data.movies || []);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load top trending movies:", err);
        setError("Failed to load movies.");
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return { movies, loading, error };
};

export default useGetTopTrendingMovies;
