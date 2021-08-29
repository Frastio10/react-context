import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import Movie from './Movie'

const MovieList = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return (
        <div>
            {
                movies.map(movie=> (
                    <Movie title={ movie.title } price= { movie.price } key= { movie.id }/>
                ))
            }
        </div>
    )
}

export default MovieList