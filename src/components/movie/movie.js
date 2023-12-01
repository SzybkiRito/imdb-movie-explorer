import MovieRating from "../movieRating/movieRating";
import "./movie.css";

function Movie(props) {
	return (
		<div className="card">
			<img
				src={props.movie.imageUrl}
				alt="Movie Poster"
				width="250"
				height="370"
			/>
			<p className="inter-sm origin">{props.movie.releaseYear}</p>
			<p className="inter-sm movie-title">{props.movie.title}</p>
			<MovieRating movie={props.movie} />
			<p className="inter-sm genre">
				{props.movie.genreNames?.map((genreName) => {
					return `${genreName} `;
				})}
			</p>
		</div>
	);
}

export default Movie;
