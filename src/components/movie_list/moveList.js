import "./movieList.css";
import ArrowRight from "../../assets/icons/arrow_right.svg";
import ArrowLeft from "../../assets/icons/arrow_left.svg";
import { useRef } from "react";

function MovieList({ title, children, fetchMoreMovies }) {
	const sliderRef = useRef(null);

	const scrollOnClick = (toRight) => {
		const container = sliderRef.current;
		const scrollAmount = 1000;
		const isEnd =
			container.scrollLeft + container.clientWidth >=
			container.scrollWidth - scrollAmount;
		if (isEnd) {
			fetchMoreMovies();
		}
		if (toRight) {
			container.scrollLeft += scrollAmount;
		} else {
			container.scrollLeft -= scrollAmount;
		}
	};

	return (
		<>
			<h3 className="inter-2xl">{title}</h3>
			<div className="featured-movies-wrapper">
				<button className="arrow_button" onClick={() => scrollOnClick(false)}>
					<img src={ArrowLeft} alt="Arrow Left" />
				</button>
				<div className="movies-featured" ref={sliderRef}>
					{children}
				</div>
				<button className="arrow_button" onClick={() => scrollOnClick(true)}>
					<img src={ArrowRight} alt="Arrow Right" />
				</button>
			</div>
		</>
	);
}

export default MovieList;
