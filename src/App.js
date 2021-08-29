import React from 'react'
import { MovieProvider } from './MovieContext'
import MovieList from './MovieList'
import Nav from './Nav'
import './App.css'

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <div className="container">
          <MovieList/>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
