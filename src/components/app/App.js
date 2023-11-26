import Header from "../header/header";
import Movie from "../movie/movie";
import ArrowRight from "../../assets/icons/arrow_right.svg";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import "./App.css";

function featuredMovies() {
	let movies = [];
	for (let index = 0; index < 6; index++) {
		movies.push(<Movie key={index} />);
	}

	return movies;
}

function App() {
	return (
		<>
			<div className="App">
				<Header />
				<main>
					<h3 className="inter-2xl">Featured Movie</h3>
					<div className="featured-movies-wrapper">
						<button className="arrow_button">
							<img src={ArrowLeft} alt="Arrow Left" />
						</button>
						<div className="movies-featured">{featuredMovies()}</div>
						<button className="arrow_button">
							<img src={ArrowRight} alt="Arrow Right" />
						</button>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
