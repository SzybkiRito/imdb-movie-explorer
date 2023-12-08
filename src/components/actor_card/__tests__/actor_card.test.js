import { render, screen, cleanup } from "@testing-library/react";
import TMDB_API from "../../../api/TMDB_API";
import ActorCard from "../actord_card";

describe("ActorCard", () => {
	let actors;
	beforeAll(async () => {
		actors = await TMDB_API.getPopularActors(1, []);
	});

	afterEach(cleanup);

	test("Actor Image has correct src", async () => {
		const actor = actors[0];
		render(<ActorCard actor={actor} />);
		const image = screen.getByAltText(actor.name);
		expect(image.src).toBe(actor.imageUrl);
	});

	test("Actor Image has alt text", async () => {
		const actor = actors[0];
		render(<ActorCard actor={actor} />);
		const image = screen.getByAltText(actor.name);
		expect(image).toBeInTheDocument();
	});

	test("Render Actor Card", async () => {
		const actor = actors[0];
		render(<ActorCard actor={actor} />);
		const actorCard = screen.getByTestId(`actor_${actor.id}`);
		expect(actorCard).toBeInTheDocument();
	});
});
