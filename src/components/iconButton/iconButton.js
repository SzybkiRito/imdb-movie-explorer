import React from "react";
import "./iconButton.css";

/**
 * @param {Object} props - The props object
 * @param {string} props.text - The text to be displayed
 * @param {string} props.icon - The icon to be displayed
 * @param {function} props.onClick - The function to be called when the button is clicked
 * @param {string} props.type - The type of button (e.g., "small")
 */

function IconButton({ text, icon, onClick, type }) {
	const buttonStyle = {
		backgroundImage:
			type !== "small"
				? `url(${require(`../../assets/icons/${icon}`)})`
				: "none",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "10px center",
		backgroundSize: "25px",
		padding: type === "small" ? "5px 10px" : "10px 20px",
		width: type === "small" ? "100%" : "100%",
	};

	const textStyle = {
		fontSize: type === "small" ? "1rem" : "1.25rem",
	};

	return (
		<button className="icon-button" onClick={onClick} style={buttonStyle}>
			<span style={textStyle}>{text}</span>
		</button>
	);
}

export default IconButton;
