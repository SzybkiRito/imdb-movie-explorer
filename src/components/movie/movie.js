import MovieRating from "../movieRating/movieRating";
import "./movie.css";

function Movie(props) {
	return (
		<div
			className="card"
			data-testid={`movie_${props.movie.id}`}
			onClick={() => {
				props.onClick(props.movie);
			}}
		>
			<img
				src={props.movie.imageUrl}
				alt={props.movie.title}
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
