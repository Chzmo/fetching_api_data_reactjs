import {useEffect} from "react";
import './App.css'
import SearchIcon from './search.svg'

const API_URL = 'http://www.omdbapi.com/?apikey=bc183683'

const movies = {
    "Title": "Italian Spiderman",
    "Year": "2007",
    "imdbID": "tt2705436",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
}

const App = () =>{

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
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

            <div className="container">
                <div className="movie">
                    <div>
                        <p>{movies.Year}</p>
                    </div>
                    <div>
                        <img src={movies.Poster !== 'N/A' ? movies.Poster : 'https://via.paceholder.com/400'} alt={movies.title} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;