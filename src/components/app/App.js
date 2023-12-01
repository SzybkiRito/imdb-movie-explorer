import Header from "../header/header";
import Movie from "../movie/movie";
import ArrowRight from "../../assets/icons/arrow_right.svg";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import { useEffect, useState, useRef } from "react";

import "./App.css";
import TMDB_API from "../api/TMDB_API";

function App() {
	const [movies, setMovies] = useState([]);
	const sliderRef = useRef(null);

	useEffect(() => {
		const fetchMovies = async () => {
			const popularMovies = await TMDB_API.getPopularMovies();
			const moviesWithGenres = await Promise.all(
				popularMovies.map(async (movie) => {
					const genreNames = await TMDB_API.getGenreNamesFromId(movie.genreIds);
					return <Movie key={movie.id} movie={{ ...movie, genreNames }} />;
				})
			);
			setMovies(moviesWithGenres);
		};

		fetchMovies();
	}, []);

	const scrollOnClick = (toRight) => {
		const container = sliderRef.current;
		const scrollAmount = 1000;
		if (toRight) {
			container.scrollLeft += scrollAmount;
		} else {
			container.scrollLeft -= scrollAmount;
		}
	};

	return (
		<>
			<div className="App">
				<Header />
				<main>
					<h3 className="inter-2xl">Featured Movie</h3>
					<div className="featured-movies-wrapper">
						<button
							className="arrow_button"
							onClick={() => scrollOnClick(false)}
						>
							<img src={ArrowLeft} alt="Arrow Left" />
						</button>
						<div className="movies-featured" ref={sliderRef}>
							{movies}
						</div>
						<button
							className="arrow_button"
							onClick={() => scrollOnClick(true)}
						>
							<img src={ArrowRight} alt="Arrow Right" />
						</button>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
