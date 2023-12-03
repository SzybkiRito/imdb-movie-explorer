import { render, screen, cleanup } from "@testing-library/react";
import TMDB_API from "../../api/TMDB_API";
import Movie from "../movie";

describe("Movie", () => {
	let moviesWithGenres;
	beforeAll(async () => {
		const popularMovies = await TMDB_API.getPopularMovies();
		moviesWithGenres = await Promise.all(
			popularMovies.map(async (movie) => {
				const genreNames = await TMDB_API.getGenreNamesFromId(movie.genreIds);
				return { ...movie, genreNames };
			})
		);
	});
	afterEach(cleanup);

	test("API call to TMDB", async () => {
		const popularMovies = await TMDB_API.getPopularMovies();
		expect(popularMovies.length).toBeGreaterThan(0);
	});

	test("API call to TMDB for genre names", async () => {
		expect(moviesWithGenres[0].genreNames.length).toBeGreaterThan(0);
	});

	test("Movie Image has alt text", async () => {
		const movie = moviesWithGenres[0];
		render(<Movie movie={movie} />);
		const image = screen.getByAltText(movie.title);
		expect(image).toBeInTheDocument();
	});

	test("Movie Image has correct src", async () => {
		const movie = moviesWithGenres[0];
		render(<Movie movie={movie} />);
		const image = screen.getByAltText(movie.title);
		expect(image.src).toBe(movie.imageUrl);
	});

	test("Render Movie Card", async () => {
		const movie = moviesWithGenres[0];
		render(<Movie movie={movie} />);
		const movieCard = screen.getByTestId(`movie_${movie.id}`);
		expect(movieCard).toBeInTheDocument();
	});
});
