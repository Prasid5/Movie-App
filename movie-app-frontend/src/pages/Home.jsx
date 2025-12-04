import MovieCart from "../components/MovieCard";
function Home(){
    const movies=[
        { id:'1', title:'Terminator', release_date:'2020'},
        { id:'2', title:'Life of Pie', release_date:'2020'},
        { id:'2', title:'The Matrix', release_date:'2020'},
    ]
    return(
        <div className="home">
            <div className="movie-grid">
                {movies.map((movie) => (<MovieCart movie={movie} key={movie.id} />))}
            </div>
        </div>
    );
}
export default Home