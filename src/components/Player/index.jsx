import React, {useState, useEffect, useRef} from 'react';
import './style.css'

const Player = ({src}) => {
    const [playing, setPlaying] = useState(false);

  const audioRef = useRef();

  const handlePlay = () => {
    setPlaying(!playing);
  };

  // na audiu potrebuju zavolat metodu play nebo pause
  useEffect(() => {
    if (playing) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [playing])

  return (
    <div className="player-controls">
      <h2>Karaoke</h2>
      <audio src={src} ref={audioRef}/>
      <button className={playing ? 'play-button pause' : 'play-button play'} onClick={handlePlay}></button>
    </div>
  );
}

export default Player;