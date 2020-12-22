import React from 'react'
import '../styles/displayMovie.css';
export default function DisplayNominations(props) {
    return (
        <>
        {props.movies.map((movie,index) =>(
            <li key={movie.imdbID} className="list-group-item list-group-item-light m-3 p-3">
                <h2>{movie.Title} ({movie.Year})</h2>
                <img src={movie.Poster} alt = {movie.Title}/><br/>               
            </li>    
        ))}
    </>
    )
}
