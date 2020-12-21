import React, {useState} from 'react';
import '../styles/displayMovie.css';
//Add counter variable to control nominations

export default function Displaymovie(props) {
    const [nominate, setNominate] = useState([]);
    return (
        <div className="layoutMovies">
            <ul>
            <h2 className="movieList">{props.movies.length===0? "No Results":"Results Found below"}</h2>
            {props.movies.map((movie,index) =>(
                <li key={movie.imdbID} className="movieList">
                    <h2>{movie.Title} ({movie.Year})</h2>
                    <img  className="movie-poster" src={movie.Poster} alt = {movie.Title}/><br/>
                    <button type="button" className="btn btn-secondary">Nominate</button>
                </li>    
            ))}
            </ul>
            <div className = "nominationsList">
                <h2>Nominations</h2>
                <ul>
                    {/* <li>{nominate[0]}</li> */}
                </ul>
            </div>
        </div>
    )

}