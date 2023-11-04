import React, {useState} from 'react';
import './style.css';
import Player from '../../components/Player'
import Lyrics from '../../components/Lyrics'
import lyricsLines from '../../lyrics-lines.js'

export const HomePage = () => {
  const [currentLine, setCurrentLine] = useState(-1)
  
  const handleTimeUpdate = (currentTime) => {
    const filteredLines = lyricsLines.filter((line) => line.time < currentTime)
    if ((filteredLines.length - 1) !== currentLine) {
      setCurrentLine(filteredLines.length - 1)
    }
  }

  return (
    <div className="container">
      <Player src={'fools-garden-lemon-tree.mp3'} onTimeUpdate={handleTimeUpdate}/>
      <Lyrics lines={lyricsLines} currentLineIndex={currentLine}/>
    </div>
  );
};
