import React,{useState,useEffect} from 'react';
import '../styles/App.css';
import AddNomination from './AddNomination';
import DisplayMovie from './Displaymovie';
import DisplayNominations from './DisplayNominations';

function App() {
  const APP_key = '5abc4a1e';
  
  const [movies, setMovies] = useState([]);
  const [nominate, setNominate] = useState([]);
  const [searchMovie, setSearch] = useState("");
  const [query, setQuery] = useState('');

  const getMovie = async (query) =>{
    const response = await fetch(`https://www.omdbapi.com/?apikey=${APP_key}&s=${query}`);
    const data = await response.json();
    setMovies([]);
    if(data.Search)
    {
      setMovies(data.Search);
    }
  };

  //Fetch movie data
  useEffect( async () =>{
    getMovie(query);
  },[query]);

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(searchMovie);
    setSearch('');
  }

  const addNomi = (movie) =>{
    const newNominationList = [...nominate,movie];
    setNominate(newNominationList);
    console.log(nominate);
  }
  return ( 
    <div className="App">
      <h1>Shoppies</h1>
      <form onSubmit={getSearch} className="movie-title">
        <h2>Movie Title</h2>
        <button className="search" type = "submit">Search</button>
        <input className="movie-name" type="text" value={searchMovie} onChange={updateSearch}/>
      </form>

        <div>
          <h2 className="resultsHeading1">{movies.length===0?"No Results":"Results Found"}</h2>
          <DisplayMovie movies = {movies} onClickNomi={addNomi} nominateComp = {AddNomination}/>
        </div>


        <div>
          <h2 className="resultsHeading2">Nominations</h2>
          <DisplayNominations movies = {nominate}/>
        </div>

      </div>
  );
}
export default App;
