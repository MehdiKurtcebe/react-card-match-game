import {v4 as uuidv4} from 'uuid';
import {createContext, useState} from "react";
import './App.css';
import CardGrid from './components/CardGrid';

export const CardContext = createContext();

const cardImages = [
	{"src": "/img/canvas.png"},
	{"src": "/img/cat.png"},
	{"src": "/img/long-exposure.png"},
	{"src": "/img/moon.png"},
	{"src": "/img/road.png"},
	{"src": "/img/ship.png"}
];

function App() {
	const [cards, setCards] = useState([]);
	const [turns, setTurns] = useState(0);

	const shuffleCards = () => {
		const shuffledCards = [...cardImages, ...cardImages]
			.sort(() => Math.random() - 0.5)
			.map(card => ({...card, id: uuidv4()}));

		setCards(shuffledCards);
		setTurns(0);
	}

	return (
		<div className="App">
			<h1>Card Matching Game</h1>
			<button onClick={shuffleCards}>New Game</button>

			<CardContext.Provider value={{cards}}>
				<CardGrid/>
			</CardContext.Provider>
		</div>
	);
}

export default App;
