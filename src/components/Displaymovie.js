import React, {useState} from 'react';
import '../styles/displayMovie.css';
//Add counter variable to control nominations

export default function Displaymovie(props) {
    
    const NominationComponent = props.nominateComp;
    
    return (
        <>
            {props.movies.map((movie,index) =>(
                <li key={movie.imdbID} className="list-group-item list-group-item-light m-3 p-3">
                    <h2>{movie.Title} ({movie.Year})</h2>
                    <img  src={movie.Poster} alt = {movie.Title}/><br/>
                    <div className="d-flex justify-content-center" onClick={() => {props.onClickNomi(movie)}}>
                        <NominationComponent/>
                    </div>    
                </li> 
                
            ))}
        </>
    )

}