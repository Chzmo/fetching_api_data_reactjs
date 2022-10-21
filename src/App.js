import {useEffect, useState} from "react";
import './App.css'
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";



const API_URL = 'http://www.omdbapi.com/?apikey=bc183683'

const movie = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () =>{
    const [movies, SetMovies] = useState([]);

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        SetMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('spiderman')
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input 
                    placeholder="Search for Movies"
                    value = "Superman"
                    onChange={() => {}}
                    type="text" 
                />

                <img 
                    src={SearchIcon} 
                    alt="search"
                    onClick={() => {}}
                />
            </div>

            {
                movies.length > 0 ?
                (
                    <div className="container">
                        <MovieCard movie={movies[0]}/>
                    </div>
                ):(
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
        </div>
    );
}

export default App;