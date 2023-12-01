import API_UTILS from "./API_UTILS";

class TMDB_API {
	static API_URL = "https://api.themoviedb.org/3/";
	static API_TOKEN = process.env.REACT_APP_API_TOKEN_TMDB_API_KEY;
	static API_IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
	static apiUtils = new API_UTILS(TMDB_API.API_URL, TMDB_API.API_TOKEN);
	static genreIdsAndNames = this.getGenreNames();

	static async getPopularMovies() {
		const popularMovies = await TMDB_API.apiUtils.get("movie/popular");
		if (popularMovies == null) return null;
		let movies = [];
		for (let i = 0; i < popularMovies.results.length; i++) {
			let movie = popularMovies.results[i];
			movies.push({
				id: movie.id,
				imageUrl: `${TMDB_API.API_IMAGE_PATH}${movie.poster_path}`,
				title: movie.title,
				genreIds: movie.genre_ids,
				releaseYear: movie.release_date,
				rating: movie.vote_average,
			});
		}

		return movies;
	}

	static async getGenreNames() {
		const genreNames = await TMDB_API.apiUtils.get(
			"genre/movie/list?language=en"
		);

		if (genreNames == null) return null;
		return genreNames.genres;
	}

	static async getGenreNamesFromId(genreIds) {
		let genreNames = await TMDB_API.genreIdsAndNames;
		let genreNamesList = [];
		for (let i = 0; i < genreNames.length; i++) {
			if (genreIds.includes(genreNames[i].id)) {
				genreNamesList.push(genreNames[i].name);
			}
		}

		return genreNamesList;
	}
}

export default TMDB_API;
