import { useState } from "react";
import "./assets/fonts/fonts.css";

import useSound from "use-sound";
import gameStart from "./assets/sounds/game_start.mp3";
import roundStart from "./assets/sounds/round_start.mp3";

import useKeyboardInput from "./components/keyboardInput";

function App() {
	const [count, setCount] = useState(0);

	const [playGameStart] = useSound(gameStart, { volume: 0.55 });
	const [playRoundStart] = useSound(roundStart, { volume: 0.45 });

	useKeyboardInput((event) => {
		switch (event.key) {
			case "ArrowUp":
			case "w":
				console.log("Up key pressed");
				break;
			case "ArrowDown":
			case "s":
				console.log("Down key pressed");
				break;
			case "ArrowLeft":
			case "a":
				console.log("Left key pressed");
				break;
			case "ArrowRight":
			case "d":
				console.log("Right key pressed");
				break;
			default:
				break;
		}
	});

	return (
		<>
			<div className="font-sinclair font-bold text-5xl">STRATAGEM HERO</div>
			<div className="font-sinclair font-medium">
				<button
					onClick={() => {
						setCount((count) => count + 1);
						setTimeout(() => playGameStart(), 10);
						playRoundStart();
					}}
				>
					count is {count}
				</button>
				<p>Enter any Stratagem Input to Start!</p>
			</div>
		</>
	);
}

export default App;
