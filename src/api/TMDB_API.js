import API_UTILS from "./API_UTILS";

class TMDB_API {
	static API_URL = "https://api.themoviedb.org/3/";
	static API_TOKEN = process.env.REACT_APP_API_TOKEN_TMDB_API_KEY;
	static API_IMAGE_PATH = "https://image.tmdb.org/t/p/w500/";
	static apiUtils = new API_UTILS(TMDB_API.API_URL, TMDB_API.API_TOKEN);
	static genreIdsAndNames = this.#getGenreNames();

	/**
	 * @param {Array} currentMovies // The current movies array
	 * @param {Number} page // The page number to fetch
	 * @returns {Array} // Returns an array of movies
	 */
	static async getPopularMovies(currentMovies, page) {
		const popularMovies = await TMDB_API.apiUtils.get(
			`movie/popular?page=${page}`
		);
		if (popularMovies == null) return null;
		let movies = currentMovies.length > 0 ? currentMovies : [];
		for (let i = 0; i < popularMovies.results.length; i++) {
			let movie = popularMovies.results[i];
			movies.push({
				id: movie.id,
				imageUrl: `${TMDB_API.API_IMAGE_PATH}${movie.poster_path}`,
				title: movie.title,
				overview: movie.overview,
				genreIds: movie.genre_ids,
				releaseYear: movie.release_date,
				rating: movie.vote_average,
			});
		}

		return movies;
	}

	/**
	 * @param {Array} currentMovies // The current movies array
	 * @param {Number} page // The page number to fetch
	 * @returns {Array} // Returns an array of movies
	 */
	static async getUpComingMovies(currentMovies, page) {
		const upComingMovies = await TMDB_API.apiUtils.get(
			`movie/upcoming?page=${page}`
		);
		if (upComingMovies == null) return null;
		let movies = currentMovies.length > 0 ? currentMovies : [];
		for (let i = 0; i < upComingMovies.results.length; i++) {
			let movie = upComingMovies.results[i];
			movies.push({
				id: movie.id,
				imageUrl: `${TMDB_API.API_IMAGE_PATH}${movie.poster_path}`,
				title: movie.title,
				overview: movie.overview,
				genreIds: movie.genre_ids,
				releaseYear: movie.release_date,
				rating: movie.vote_average,
			});
		}

		return movies;
	}

	static async getPopularActors(page, currentActors) {
		const popularActors = await TMDB_API.apiUtils.get(
			`person/popular?page=${page}`
		);
		if (popularActors == null) return null;
		let actors = currentActors.length > 0 ? currentActors : [];
		for (let i = 0; i < popularActors.results.length; i++) {
			let actor = popularActors.results[i];
			actors.push({
				id: actor.id,
				imageUrl: `${TMDB_API.API_IMAGE_PATH}${actor.profile_path}`,
				name: actor.name,
			});
		}

		return actors;
	}

	/**
	 * @returns {Array} // Returns an array of genre names
	 */
	static async #getGenreNames() {
		const genreNames = await TMDB_API.apiUtils.get(
			"genre/movie/list?language=en"
		);

		if (genreNames == null) return null;
		return genreNames.genres;
	}

	/**
	 * @param {Array} genreIds // The genre ids to get the names from
	 * @returns {Array} // Returns an array of genre names
	 */
	static getGenreNamesFromId(genreIds) {
		let genreNames = TMDB_API.genreIdsAndNames;
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
