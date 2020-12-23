import React from 'react'
import '../styles/displayMovie.css';
export default function DisplayNominations(props) {
    const NominationComponent = props.nominateComp;



    return (
        <>
            {props.movies.length === 5 ? <div class="alert alert-danger" role="alert">
                Maximum 5 Nominations
        </div> : null
            }
            {props.movies.map((movie, index) => (
                <li key={movie.imdbID} className="list-group-item list-group-item-light m-3 text-dark">
                    <div className="d-flex flex-column align-items-center text-dark">
                        <h6>{movie.Title} ({movie.Year})</h6>
                        <div onClick={() => { props.onClickNomi(movie) }}>
                            <NominationComponent heading="Remove" disableBtn={false} />
                        </div>
                    </div>

                </li>
            ))}
        </>
    )
}
