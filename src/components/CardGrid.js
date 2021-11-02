import { CardContext } from "../App";
import { useContext } from "react";
import Card from "./Card";

const CardGrid = () => {
	const { cards, choice1, choice2 } = useContext(CardContext);

	return (
		<div className="card-grid">
			{cards.map((card) => (
				<Card
					key={card.id}
					card={card}
					flipped={
						card === choice1 ||
						card === choice2 ||
						card.matched
					}
				/>
			))}
		</div>
	);
};

export default CardGrid;
