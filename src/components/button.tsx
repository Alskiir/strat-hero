import useSound from "use-sound";
import clickSound from "../assets/sounds/press_01.mp3";

interface ButtonProps {
	text: string;
	isActive: boolean;
	handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, isActive, handleClick }) => {
	const [playClickSound] = useSound(clickSound, { volume: 0.4 });

	return (
		<button
			onClick={() => {
				playClickSound();
				handleClick();
			}}
			className={`transition-colors duration-100 px-6 py-2 mx-4 font-sinclair font-medium text-2xl/8 border-4 border-diverYellow border-transparent  ${
				isActive
					? "bg-diverYellow bg-opacity-20 border-l-4 border-l-diverYellow border-r-4 border-r-diverYellow border-r-transparent border-y-4 border-y-diverYellow border-y-transparent shadow-buttonShadow"
					: "text-white text-opacity-40 bg-gray-600 bg-opacity-40"
			} 	hover:text-white hover:bg-diverYellow hover:bg-opacity-40 hover:border-4 hover:border-diverYellow hover:shadow-buttonShadowHover`}
		>
			<span> {text} </span>
		</button>
	);
};

export default Button;
