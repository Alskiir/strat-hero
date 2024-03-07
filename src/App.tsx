import { useState } from "react";
import './assets/fonts/fonts.css';

import useKeyboardInput from './components/keyboardInput';

import gameStart from "./assets/sounds/game_start.mp3";
import roundStart from "./assets/sounds/round_start.mp3";
import useAudio from "./components/useAudio";

// function playGameStart() {
// 	const audio1 = new Audio(gameStart);
//   const audio2 = new Audio(roundStart);

//   audio1.volume = 0.65;
//   audio2.volume = 0.5;

//   setTimeout(() => {
//     audio1.play();
//   }, 10);
//   audio2.play();
// }

function App() {
	const [count, setCount] = useState(0);
  const playGameStart = useAudio(gameStart, 1000, 0.65);
  const playRoundStart = useAudio(roundStart, 0, 0.5);

  const playStartSounds = () => {
    playGameStart();
    playRoundStart();
  }

  useKeyboardInput((event) => {
    switch(event.key) {
      case 'ArrowUp':
      case 'w':
        console.log('Up key pressed');
        break;
      case 'ArrowDown':
      case 's':
        console.log('Down key pressed');
        break;
      case 'ArrowLeft':
      case 'a':
        console.log('Left key pressed');
        break;
      case 'ArrowRight':
      case 'd':
        console.log('Right key pressed');
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
						playStartSounds();
					}}
				>
					count is {count}
				</button>
				<p>
					Enter any Stratagem Input to Start!
				</p>
			</div>
		</>
	);
}

export default App;
