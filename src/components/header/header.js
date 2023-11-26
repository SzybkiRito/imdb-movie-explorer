import "./header.css";
import Navigation from "../navigation/navigation";
import imdbLogo from "../../assets/icons/imdb-logo.png";

function Header() {
	return (
		<header>
			<Navigation />
			<div className="header-content">
				<h2 className="inter-6xl">John Wick: 3 Parebellum</h2>
				<div className="flex">
					<img src={imdbLogo} alt="IMDB Logo" />
					<p className="inter-base">86.0 / 100</p>
				</div>

				<span>
					John Wick is on the run after killing a member of the international
					assassins' guild, and with a $14 million price tag on his head, he is
					the target of hit men and women everywhere.
				</span>
				<button>
					<span className="inter-lg">Watch Trailer</span>
				</button>
			</div>
		</header>
	);
}

export default Header;
