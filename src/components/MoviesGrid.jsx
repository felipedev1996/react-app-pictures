
import { useEffect, useState } from 'react';
import { getFetch } from '../utils/httpClient';
import { MovieCard } from './MovieCard';
// import movies from './movies.json';
import styles from './MoviesGrid.module.css';



export function MoviesGrid() {


    const [movies, setMovies] = useState([]);





    useEffect(() => {



        getFetch("/discover/movie").then((data) => setMovies(data.results));



    }, []);//para evitar los loop infinitos debemos pasarle esta dependencia al efecto

    return (
        <ul className={styles.moviesGrid}>
            {
                movies.map((movie) => (

                    <MovieCard key={movie.id} movie={movie} />


                ))}

        </ul>
    );


}