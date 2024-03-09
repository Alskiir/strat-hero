import { useState } from "react";
import Button from "../button";

const Footer: React.FC<{}> = () => {
    const [activeButton, setActiveButton] = useState<string | null>(null);
	const buttons = ["LOGIN", "KEYBINDINGS"];

    return (
        <div className="flex flex-row items-center justify-center border-t border-white h-28">
            <div className="flex justify-between">
                {buttons.map((button) => (
                    <Button
                        key={button}
                        text={button}
                        isActive={activeButton === button}
                        handleClick={() => setActiveButton(button)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Footer;
