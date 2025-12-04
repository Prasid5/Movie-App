function MovieCart({movie}){
    function onFavouriteClick(){
        alert('Favourite Button Clicked')
    }

    return(
        <div className="movie-cart">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={onFavouriteClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h2>{movie.title}</h2>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}

export default MovieCart