import React, {useState} from 'react';
import './style.css';
import Player from '../../components/Player'
import Lyrics from '../../components/Lyrics'
import lyricsLines from '../../lyrics-lines.js'

export const HomePage = () => {
  const [currentLine, setCurrentLine] = useState(3)

  return (
    <div className="container">
      <Player src={'fools-garden-lemon-tree.mp3'}/>
      <Lyrics lines={lyricsLines} currentLineIndex={currentLine}/>
    </div>
  );
};
