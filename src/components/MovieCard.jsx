

import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export function MovieCard({ movie }) {

  

  const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;



  return (

    <li className={styles.movieCard } >
      <Link to={"/movies/" + movie.id}>
      <img
        className={styles.movieImage}
        src={imgUrl}
      width={230}
      height={345}
        alt="{movie.title}"
      />
      <div>{movie.title}</div>
      </Link>
    </li>
  )
}



