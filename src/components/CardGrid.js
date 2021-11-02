import { CardContext } from "../App";
import { useContext } from "react";
import Card from "./Card";

const CardGrid = () => {
	const { cards } = useContext(CardContext);

	return (
		<div className="card-grid">
			{cards.map((card) => (
				<Card key={card.id} card={card} />
			))}
		</div>
	);
};

export default CardGrid;
