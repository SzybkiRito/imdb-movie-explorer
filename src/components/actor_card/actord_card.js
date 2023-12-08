import "./actor_card.css";

function ActorCard({ actor }) {
	return (
		<div className="actor-card" data-testid={`actor_${actor.id}`}>
			<img src={actor.imageUrl} alt={actor.name} width="250" height="370" />
			<h4 className="inter-2xl">{actor.name}</h4>
		</div>
	);
}

export default ActorCard;
