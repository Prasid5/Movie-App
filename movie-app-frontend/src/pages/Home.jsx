import MovieCart from "../components/MovieCard";
import {useState, useEffect} from "react";
import {searchMovies, getPopularMovies} from "../services/api";
import "../css/Home.css";
function Home(){
    const[searchQuery,setSearchQuery] = useState("");
    const[movies, setMovies]=useState([]);
    const[error, setError]=useState(null);
    const[loading, setLoading]=useState(true); //why true because right when we loading this component, we are going to be loading data.

    useEffect(() => {
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }
            catch(err){
                console.log(err)
                setError("Failed to load movies...")
            }
            finally{
                setLoading(false)//so no-longer loading
            }
        }
        loadPopularMovies()
    }, []);

    const handleSearch= async (e) => {
        e.preventDefault();//It means that it prevent default behaviour which when submit button cick it will refresh page.

        if(!searchQuery.trim()) return

        if(loading) return

        setLoading(true)
        try{
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        }
        catch(err){
            console.log(err)
            setError("Failed to search movies...")
        }
        finally{
            setLoading(false)
            
        }
    };

    return(
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text"
                placeholder="Search for movie...."
                className="search-input"
                value={searchQuery}
                onChange={(e)=> setSearchQuery(e.target.value)} 
                />
                <button type="submit" className="search-btn">
                    Search
                </button>
            </form>

            {error && <div className="error-message">{error}</div>}
            { loading ? (<div className="loading">Loading....</div>
            ) : (
                <div className="movies-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                (<MovieCart movie={movie} key={movie.id} />)
                )}
            </div>)}
        </div>
    );
}
export default Home