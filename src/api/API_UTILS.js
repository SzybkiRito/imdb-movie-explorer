class API_UTILS {
	/**
	 * @param {String} apiUrl
	 * @param {String} authenticationToken
	 */
	constructor(apiUrl, authenticationToken) {
		this.apiUrl = apiUrl;
		this.authenticationToken = authenticationToken;
	}

	headers() {
		return {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${this.authenticationToken}`,
		};
	}

	/**
	 * @param {String} endpoint
	 */
	async get(endpoint) {
		try {
			const result = await fetch(`${this.apiUrl}${endpoint}`, {
				method: "GET",
				headers: this.headers(),
			});

			if (!result.ok) {
				throw new Error("HTTP Status Code Error: ", result.status);
			}

			return result.json();
		} catch (e) {
			throw new Error(
				`Error while trying to fetch: ${this.apiUrl}${endpoint} \n Error: ${e}`
			);
		}
	}
}

export default API_UTILS;
