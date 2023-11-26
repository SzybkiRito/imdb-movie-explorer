import MovieRating from "../movieRating/movieRating";
import "./movie.css";

function Movie() {
	return (
		<div className="card">
			<img src="https://via.placeholder.com/250x370" alt="Movie Poster" />
			<p className="inter-sm origin">USA, 2016 - Current</p>
			<p className="inter-sm movie-title">Stranger Things</p>
			<MovieRating />
			<p className="inter-sm genre">Action, Adventure, Horror</p>
		</div>
	);
}

export default Movie;
