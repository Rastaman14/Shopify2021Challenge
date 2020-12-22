import React from 'react'
import '../styles/displayMovie.css';
export default function DisplayNominations(props) {
    return (
        <>
        {props.movies.map((movie,index) =>(
            <div key={movie.imdbID} className="movieList">
                <h2>{movie.Title} ({movie.Year})</h2>
                <img  className="movie-poster" src={movie.Poster} alt = {movie.Title}/><br/>               
            </div>    
        ))}
    </>
    )
}
