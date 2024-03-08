import useKeyboardInput from "./keyboardInput";

interface KeyBindingsProps {
  keyBindings: {
    up: string;
    down: string;
    left: string;
    right: string;
  };
  setKeyBindings: React.Dispatch<React.SetStateAction<{
    up: string;
    down: string;
    left: string;
    right: string;
  }>>;
}

const Keybinds: React.FC<KeyBindingsProps> = ({ keyBindings, setKeyBindings }) => {
  useKeyboardInput((event: KeyboardEvent) => {
    switch (event.key) {
      case keyBindings.up:
        console.log("Up key pressed");
        break;
      case keyBindings.down:
        console.log("Down key pressed");
        break;
      case keyBindings.left:
        console.log("Left key pressed");
        break;
      case keyBindings.right:
        console.log("Right key pressed");
        break;
      default:
    }
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyBindings({
      ...keyBindings,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <form>
        <label>
          Up:
          <input className="text-black" type="text" name="up" value={keyBindings.up} onChange={handleInputChange} />
        </label>
        <label>
          Down:
          <input className="text-black" type="text" name="down" value={keyBindings.down} onChange={handleInputChange} />
        </label>
        <label>
          Left:
          <input className="text-black" type="text" name="left" value={keyBindings.left} onChange={handleInputChange} />
        </label>
        <label>
          Right:
          <input className="text-black" type="text" name="right" value={keyBindings.right} onChange={handleInputChange} />
        </label>
      </form>
    </div>
  );
};

export default Keybinds;
