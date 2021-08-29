import React, {useState, useContext} from 'react'
import { MovieContext } from './MovieContext'

const AddMovie = () => {

    const [ movies, setMovies ] = useContext(MovieContext)
    const [ price, setPrice ] = useState('')
    const [ title, setTitle ] = useState('')

    const updateTitle = e =>{
        setTitle(e.target.value)
    }

    const updatePrice = e =>{
        setPrice(e.target.value)
    }

    const addMovie = e => {
        e.preventDefault()
        setMovies(prevMovies => [...prevMovies, { title: title, price: price, id: Math.random() }])
    }

    return (
        <form onSubmit={ addMovie }>
            <input type="text" name="title" placeholder="title" value={ title } onChange={ updateTitle }/> 
            <input type="text" name="price" placeholder="price" value={ price } onChange={ updatePrice }/>
            <button type="submit">Submit</button>
        </form>
    )
}


export default AddMovie