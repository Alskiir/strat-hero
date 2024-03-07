import { useEffect, useState } from 'react';

function useAudio(url: string, delay: number = 0, volume: number = 1.0) {
  const [audio] = useState(new Audio(url));

  const play = () => {
    setTimeout(() => {
      audio.play();
    }, delay);
  };

  useEffect(() => {
    audio.volume = volume;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [audio, volume]);

  return play;
}

export default useAudio;
