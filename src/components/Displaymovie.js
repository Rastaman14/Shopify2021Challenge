import React, {useState} from 'react';
import '../styles/displayMovie.css';
//Add counter variable to control nominations

export default function Displaymovie(props) {
    
    const NominationComponent = props.nominateComp;
    
    return (
        <>
            {props.movies.map((movie,index) =>(
                <div key={movie.imdbID} className="movieList">
                    <h2>{movie.Title} ({movie.Year})</h2>
                    <img  className="movie-poster" src={movie.Poster} alt = {movie.Title}/><br/>
                    <div onClick={() => props.onClickNomi(movie)}>
                        <NominationComponent/>
                    </div>
                    
                    
                </div>    
            ))}
        </>
    )

}