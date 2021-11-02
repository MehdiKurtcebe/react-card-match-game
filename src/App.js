import { v4 as uuidV4 } from "uuid";
import { createContext, useEffect, useState } from "react";
import "./App.css";
import CardGrid from "./components/CardGrid";

export const CardContext = createContext();

const cardImages = [
	{ src: "/img/canvas.png", matched: false },
	{ src: "/img/cat.png", matched: false },
	{ src: "/img/long-exposure.png", matched: false },
	{ src: "/img/moon.png", matched: false },
	{ src: "/img/road.png", matched: false },
	{ src: "/img/ship.png", matched: false },
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);
	const [choice1, setChoice1] = useState(null);
	const [choice2, setChoice2] = useState(null);

	useEffect(() => {
		if (choice1 && choice2) {
			if (choice1.src === choice2.src) {
				setCards((prevCards) => {
					return prevCards.map((card) => {
						if (card.src === choice1.src) {
							return { ...card, matched: true };
						} else {
							return card;
						}
					});
				});
			}
			setTimeout(() => {
				setTurns((prevTurn) => prevTurn + 1);
				setChoice1(null);
				setChoice2(null);
			}, 1000);
		}
	}, [choice1, choice2]);

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map((card) => ({ ...card, id: uuidV4() }));

		setCards(shuffledCards);
		setTurns(0);
	};

	return (
		<div className="App">
			<h1>Card Matching Game</h1>
			<button onClick={shuffleCards}>New Game</button>

			<CardContext.Provider
				value={{
					cards,
					turns,
					setTurns,
					choice1,
					choice2,
					setChoice1,
					setChoice2,
				}}
			>
				<CardGrid />
			</CardContext.Provider>
		</div>
	);
}

export default App;
