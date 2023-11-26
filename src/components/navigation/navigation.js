import "./navigation.css";
import tvIcon from "../../assets/icons/tv-retro-svgrepo-com.svg";
import hamburgerIcon from "../../assets/icons/hamburger.svg";

function Navigation() {
	return (
		<nav>
			<div className="heading">
				<div className="icon-tv">
					<img src={tvIcon} alt="TV Retro Icon" />
				</div>
				<h1 className="inter-2xl">Movie Explorer</h1>
			</div>
			<input
				type="text"
				placeholder="What do you want to watch?"
				className="search-bar inter-base"
			/>
			<div className="user-profile">
				<span>Sign in</span>
				<div className="hamburger">
					<img src={hamburgerIcon} alt="Hamburger Icon" />
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
