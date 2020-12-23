import React from 'react';
import '../styles/displayMovie.css';
import './Options';
//Add counter variable to control nominations

export default function Displaymovie(props) {

    const getOtps = (value) =>{
        return value
    }
    const NominationComponent = props.nominateComp;

    const check = (movieID) => {
        for (let x = 0; x < props.compareID.length; x++) {
            if (props.compareID[x].imdbID === movieID) {
                return true;
            }
        }
        return false;
    }
    return (
        <>
        {/* {console.log(props.movies)} */}
            {props.movies.map((movie) => (
                <li key={movie.imdbID} className="list-group-item list-group-item-light m-3">
                    <div className="d-flex flex-column align-items-center text-dark">
                        <h6>{movie.Title} ({movie.Year})</h6>
                        {props.featureSelection? <img src={movie.Poster} alt={movie.Title} />:null}

                        <div onClick={() => { props.onClickNomi(movie) }}>
                            {props.compareID ? <NominationComponent heading="Nominate" disableBtn={check(movie.imdbID)} /> : null}
                        </div>
                    </div>

                </li>

            ))}
        </>
    )

}