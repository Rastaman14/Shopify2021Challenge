import React, { useState, useEffect } from 'react';
import '../styles/App.css';
import BtnNomination from './BtnNomination';
import DisplayMovie from './Displaymovie';
import DisplayNominations from './DisplayNominations';

function App() {
  const APP_key = '5abc4a1e';

  const [movies, setMovies] = useState([]);
  const [nominate, setNominate] = useState([]);
  const [searchMovie, setSearch] = useState("");
  const [query, setQuery] = useState('');
  const [alert, setAlert] = useState(true);

  const getMovie = async (query) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=${APP_key}&s=${query}`);
    const data = await response.json();
    setMovies([]);
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  //Fetch movie data
  useEffect(async () => {
    getMovie(query);
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(searchMovie);
    setSearch('');
  }

  const addNomi = (movie) => {
    if (nominate.length < 5) {
      const newNominationList = [...nominate, movie];
      setNominate(newNominationList);
      setAlert(true);
    }
    else {
      setAlert(false);
    }

    //console.log(nominate);
  }

  const removeNomi = (movie) => {
    const newNominationList = nominate.filter((nomiees) =>
      nomiees.imdbID !== movie.imdbID
    );
    setAlert(true);
    setNominate(newNominationList);
  }

  return (
    <div className="App">
      <div className="card w-25 m-2 p-2 d-flex align-items-center text-center">
        <h1>Shoppies</h1>
        <form onSubmit={getSearch} className="movie-title">
          <h2>Movie Title</h2>
          <button className="search" type="submit">Search</button>
          <input className="movie-name" type="text" value={searchMovie} onChange={updateSearch} />
        </form>
      </div>

      <div class="layoutMovie d-flex flex-row">
        <div className="w-100 text-center">
          <h2 className="card m-2 p-2 d-flex">{movies.length === 0 ? "No Results" : "Results Found"}</h2>
          <ul className="list-group">
            <DisplayMovie movies={movies} onClickNomi={addNomi} nominateComp={BtnNomination} compareID={nominate} />
          </ul>

        </div>
        <div className="w-100 text-center">
          <h2 className="card m-2 p-2">Nominations</h2>
          <ul className="list-group">
            <DisplayNominations movies={nominate} onClickNomi={removeNomi} nominateComp={BtnNomination} arrayOfFive={alert} />
          </ul>

        </div>
      </div>


    </div>
  );
}
export default App;
