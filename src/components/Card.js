import { useContext } from "react";
import { CardContext } from "../App";
import "./Card.css";

const Card = ({ card, flipped }) => {
	const { choice1, setChoice1, choice2, setChoice2 } =
		useContext(CardContext);

	const handleClick = () => {
		if (!choice1) setChoice1(card);
		else if (!choice2) setChoice2(card);
	};

	return (
		<div className="card">
			<div className={flipped ? "flipped" : ""}>
				<img className="front" src={card.src} alt="card front" />
				<img
					className="back"
					src="/img/cover.png"
					alt="card back"
					onClick={handleClick}
				/>
			</div>
		</div>
	);
};

export default Card;
