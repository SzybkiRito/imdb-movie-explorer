import "./movieRating.css";
import imdbLogo from "../../assets/icons/imdb-logo.png";

function MovieRating(props) {
	return (
		<div className="flex">
			<img src={imdbLogo} alt="IMDB Logo" width="70" />
			<p>{props.movie?.rating.toFixed(2)}/ 10</p>
		</div>
	);
}

export default MovieRating;
