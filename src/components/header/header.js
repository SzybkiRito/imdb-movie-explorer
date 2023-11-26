import "./header.css";
import Navigation from "../navigation/navigation";
import MovieRating from "../movieRating/movieRating";

function Header() {
	return (
		<header>
			<Navigation />
			<div className="header-content">
				<h2 className="inter-6xl">John Wick: 3 Parebellum</h2>
				<MovieRating />
				<span>
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is
					the target of hit men and women everywhere.
				</span>
				<button className="header-content-button">
					<span className="inter-lg">Watch Trailer</span>
				</button>
			</div>
		</header>
	);
}

export default Header;
