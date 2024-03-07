// @vite-ignore
import { useEffect } from 'react';

function useKeyboardInput(callback: (event: KeyboardEvent) => void) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => callback(event);

    window.addEventListener('keydown', handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [callback]); // Dependency array with callback means this effect runs on mount, cleanup on unmount, and whenever callback changes
}

export default useKeyboardInput;
