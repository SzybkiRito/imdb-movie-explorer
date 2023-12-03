import { render, screen, cleanup } from "@testing-library/react";
import TMDB_API from "../../api/TMDB_API";
import MovieRating from "../movieRating";

describe("MovieRating", () => {
	let movies;
	beforeAll(async () => {
		movies = await TMDB_API.getPopularMovies();
	});
	afterEach(cleanup);

	describe("MovieRating Image has correct src", () => {
		test("MovieRating Image has correct src", async () => {
			render(<MovieRating movie={movies[0]} />);
			const image = screen.getByAltText("IMDB Logo");
			expect(image.src).toBe(`${window.location.origin}/imdb-logo.png`);
		});

		test("MovieRating Rating is correct", async () => {
			render(<MovieRating movie={movies[0]} />);
			const ratingText = movies[0].rating.toFixed(2) || "N/A";
			const rating = screen.getByText(`${ratingText}/ 10`);
			expect(rating).toBeInTheDocument();
		});
	});
});
