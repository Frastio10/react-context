import React, {createContext, useState} from 'react'

export const MovieContext = createContext()

export const MovieProvider = props => {

    const [movies, setMovies] = useState([
        {
            title: "Kimi No nawa",
            price: 1000,
            id: 1300
        },
        {
            title: "Kyoukai No Kanata",
            price: 3500,
            id: 1301
        },
        {
            title: "Tenki No Ko",
            price: 2000,
            id: 1302
        },
        {
            title: "Kungfu Panda",
            price: 1230,
            id: 1303
        },
        {
            title: "Sword Art Online",
            price: 2300,
            id: 1304
        }
    ])

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            { props.children }
        </MovieContext.Provider>
    )
}


