import "./popup.css";
import xIcon from "../../assets/icons/x.svg";

function Popup(props) {
	return props.trigger ? (
		<div className="popup inter-sm popup-open-anim">
			<div className="popup-inner">
				{props.children}
				<div className="popup-inner--header">
					<button className="close-btn" onClick={() => props.setTrigger(false)}>
						<img src={xIcon} alt="close" width="25" height="25" />
					</button>
				</div>
			</div>
		</div>
	) : (
		""
	);
}

export default Popup;
