import "./movieRating.css";
import imdbLogo from "../../assets/icons/imdb-logo.png";

function MovieRating(props) {
	const rating = parseFloat(props.movie?.rating).toFixed(2) || "N/A";

	return (
		<div className="flex">
			<img src={imdbLogo} alt="IMDB Logo" width="70" />
			<p>{rating}/ 10</p>
		</div>
	);
}

export default MovieRating;
