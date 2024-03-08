import { useEffect, useState } from "react";
import { Header, Footer } from "./components/marginals/marginalExports";
import Wrapper from "./components/wrapper";
import "./assets/fonts/fonts.css";

import useSound from "use-sound";
import gameStart from "./assets/sounds/game_start.mp3";
import roundStart from "./assets/sounds/round_start.mp3";

import Keybinds from "./components/keyboard/keybinds";

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const loadAllData = async () => {
			// Load your data here. This is just a placeholder.
			await new Promise((resolve) => setTimeout(resolve, 2000));
			setIsLoading(false);
		};

		loadAllData();
	}, []);

	const [count, setCount] = useState(0);

	const [playGameStart] = useSound(gameStart, { volume: 0.45 });
	const [playRoundStart] = useSound(roundStart, { volume: 0.35 });

	const [keyBindings, setKeyBindings] = useState({
		up: "ArrowUp",
		down: "ArrowDown",
		left: "ArrowLeft",
		right: "ArrowRight",
	});

	if (isLoading) {
		return (
			<div className="flex flex-col h-screen">
				<Header />
				<Wrapper>
					<div className="font-sinclair font-bold text-5xl">STRATAGEM HERO</div>
					<div className="font-sinclair font-medium ">Loading...</div>
					<svg
						className="animate-spin h-16 w-16"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
					>
						<circle
							className="opacity-25"
							cx="12"
							cy="12"
							r="10"
							stroke="#ffe80a"
							stroke-width="4"
						></circle>
						<path
							className="opacity-75"
							fill="#ffe80a"
							d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
						></path>
					</svg>
				</Wrapper>
				<Footer />
			</div>
		);
	}

	return (
		<div className="flex flex-col h-screen">
			<Header />
			<Wrapper>
				<div className="font-sinclair font-bold text-5xl">STRATAGEM HERO</div>
				<div className="font-sinclair font-medium ">
					<button
						onClick={() => {
							setCount((count) => count + 1);
							setTimeout(() => playGameStart(), 10);
							playRoundStart();
						}}
					>
						count is {count}
					</button>
					<p className="text-diverYellow">
						Enter any Stratagem Input to Start!
					</p>
				</div>
				<Keybinds keyBindings={keyBindings} setKeyBindings={setKeyBindings} />
			</Wrapper>
			<Footer />
		</div>
	);
}

export default App;
