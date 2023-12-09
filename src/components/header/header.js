import "./header.css";
import Navigation from "../navigation/navigation";
import MovieRating from "../movieRating/movieRating";
import { useEffect, useState } from "react";
import TMDB_API from "../../api/TMDB_API";
import IconButton from "../iconButton/iconButton";

function Header() {
	const [movie, setMovie] = useState({});

	const fetchMostPopularMovie = async () => {
		const mostPopularMovies = await TMDB_API.getMostTrendingMovie();
		setMovie(mostPopularMovies);
	};

	const followYoutubeTrailerLink = async () => {
		const youtubeTrailerLink = await TMDB_API.getYoutubeTrailerLink(movie.id);
		window.open(youtubeTrailerLink, "_blank");
	};

	useEffect(() => {
		fetchMostPopularMovie();
	}, []);

	return (
		<header
			style={{
				backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.imageUrl})`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
			}}
		>
			<Navigation />
			<div className="header-content">
				<h2 className="inter-6xl">{movie.title}</h2>
				<MovieRating movie={movie} />
				<span>{movie.overview}</span>
				<IconButton
					text="Watch Trailer"
					icon="play.svg"
					onClick={() => followYoutubeTrailerLink()}
					type="big"
				/>
			</div>
		</header>
	);
}

export default Header;
