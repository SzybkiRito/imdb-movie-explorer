import "./movieRating.css";
import imdbLogo from "../../assets/icons/imdb-logo.png";

function MovieRating() {
	return (
		<div className="flex">
			<img src={imdbLogo} alt="IMDB Logo" />
			<p>86.0 / 100</p>
		</div>
	);
}

export default MovieRating;
