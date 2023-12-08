import Header from "../header/header";
import Movie from "../movie/movie";
import { useEffect, useState, useRef } from "react";

import "./App.css";
import TMDB_API from "../../api/TMDB_API";
import MovieList from "../movie_list/moveList";
import ActorCard from "../actor_card/actord_card";
import Popup from "../popup/popup";

function App() {
	const currentPopularMoviesPage = useRef(1);
	const currentUpcomingMoviesPage = useRef(1);
	const currentActorsPage = useRef(1);
	const isLoading = useRef(true);

	const [clickedMovie, setClickedMovie] = useState({});
	const [showPopup, setShowPopup] = useState(false);
	const [popularMovies, setPopularMovies] = useState([]);
	const [upcomingMovies, setUpcomingMovies] = useState([]);
	const [actors, setActors] = useState([]);

	const fetchPopularMovies = async () => {
		const movies = await TMDB_API.getPopularMovies(
			popularMovies.length > 0 ? popularMovies : [],
			currentPopularMoviesPage.current
		);
		const moviesWithGenres = await Promise.all(
			movies.map(async (movie) => {
				const genreNames = await TMDB_API.getGenreNamesFromId(movie.genreIds);
				return { ...movie, genreNames };
			})
		);
		setPopularMovies(moviesWithGenres);
		currentPopularMoviesPage.current++;
	};

	const fetchUpcomingMovies = async () => {
		const movies = await TMDB_API.getUpComingMovies(
			upcomingMovies.length > 0 ? upcomingMovies : [],
			currentUpcomingMoviesPage.current
		);
		const moviesWithGenres = await Promise.all(
			movies.map(async (movie) => {
				const genreNames = await TMDB_API.getGenreNamesFromId(movie.genreIds);
				return { ...movie, genreNames };
			})
		);
		setUpcomingMovies(moviesWithGenres);
		currentUpcomingMoviesPage.current++;
	};

	const fetchActors = async () => {
		const actorsList = await TMDB_API.getPopularActors(
			currentActorsPage.current,
			actors
		);
		setActors(actorsList);
		currentActorsPage.current++;
	};

	useEffect(() => {
		Promise.all([
			fetchPopularMovies(),
			fetchUpcomingMovies(),
			fetchActors(),
		]).then((isLoading.current = false));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="popup--wrapper">
				<Popup
					trigger={showPopup}
					setTrigger={() => {
						setShowPopup(false);
					}}
					className="popup"
				>
					<img
						src={clickedMovie.imageUrl}
						alt="poster"
						height="300"
						className="popup--poster"
					/>
					<div className="popup-inner--content">
						<h4 className="inter-xl">{clickedMovie.title}</h4>
						<p className="inter-sm origin">{clickedMovie.releaseYear}</p>
						<p className="inter-sm genre">
							{clickedMovie.genreNames?.map((genreName) => {
								return `${genreName} `;
							})}
						</p>
						<p className="inter-sm text-content">{clickedMovie.overview}</p>
					</div>
				</Popup>
			</div>
			<div className="App">
				<Header />
				<main>
					{!isLoading.current ? (
						<>
							<MovieList
								title="Popular Movies"
								children={popularMovies.map((e, i) => {
									return (
										<Movie
											key={i}
											movie={e}
											onClick={(clickedMovie) => {
												setClickedMovie(clickedMovie);
												setShowPopup(true);
											}}
										/>
									);
								})}
								fetchMoreMovies={() => fetchPopularMovies()}
							/>
							<MovieList
								title="Upcoming Movies"
								children={upcomingMovies.map((e, i) => {
									return (
										<Movie
											key={i}
											movie={e}
											onClick={(clickedMovie) => {
												setClickedMovie(clickedMovie);
												setShowPopup(true);
											}}
										/>
									);
								})}
								fetchMoreMovies={() => fetchUpcomingMovies()}
							/>
							<MovieList
								title="Popular Actors"
								children={actors.map((e, i) => {
									return <ActorCard key={i} actor={e} />;
								})}
								fetchMoreMovies={() => fetchActors()}
							/>
						</>
					) : (
						<div className="wrapper">
							<div className="loader"></div>
						</div>
					)}
				</main>
			</div>
		</>
	);
}

export default App;
