import React from 'react'

const Movie = (props) => {

    const { title, price } = props

    const style = {
        display:  'flex',
        justifyContent: 'space-between',
        padding: '5px 0 5px 0',
        borderBottom: '1px solid #eaeaea'
    }

    return (
       <div className="movie" style={ style }>
           <h2>{ title }</h2>
            <h2>{ price }</h2>
            
       </div>
    )
}

export default Movie