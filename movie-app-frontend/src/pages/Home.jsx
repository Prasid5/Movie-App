import MovieCart from "../components/MovieCard";
import {useState} from "react";
import "../css/Home.css";
function Home(){
    const[searchQuery,setSearchQuery] = useState("");

    const movies=[
        { id:'1', title:'Terminator', release_date:'2020'},
        { id:'2', title:'Life of Pie', release_date:'2020'},
        { id:'3', title:'The Matrix', release_date:'2020'},
    ]

    const handleSearch= (e) => {
        e.preventDefault()//It means that it prevent default behaviour which when submit button cick it will refresh page.
        alert(searchQuery)
    }

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


            <div className="movies-grid">
                {movies.map((movie) => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                (<MovieCart movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    );
}
export default Home