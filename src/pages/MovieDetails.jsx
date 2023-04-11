import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getFetch } from "../utils/httpClient";
import styles from "./movieDetails.module.css";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  
  
  useEffect(() => {
    getFetch("/movie/" + movieId).then((data) => {
      setMovie(data);
      console.log(data);
    });
  }, [movieId]);

  if (!movie) {
    return null;
  }
console.log(movie);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={styles.firstItem}>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Genres:</strong>
          {movie.genres.map((genre) => genre.name).join(", ")}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
}