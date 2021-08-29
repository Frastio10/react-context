import React, { useContext } from 'react'
import { MovieContext } from './MovieContext'
import AddMovie from './AddMovie'

const Nav = () => {

    const [movies, setMovies] = useContext(MovieContext)

    return(
        <>
            <div className="nav">
                <div className="container">
                    <h3>Movies</h3>
                    <div className="input-group">
                        <AddMovie/>
                    </div>
                    <h3>Amount of movies : { movies.length }</h3>
                </div>
            </div>
        </>
    )

}

export default Nav