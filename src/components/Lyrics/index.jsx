import React, {useRef, useEffect} from 'react';
import './style.css'

const Lyrics = ({lines, currentLineIndex}) => {
    const lyricsLine = useRef(currentLineIndex);

    useEffect(() => {
        if (currentLineIndex >= 0) {
            lyricsLine.current.scrollIntoView({
                block: 'start',
                inline: 'nearest',
                behavior: 'smooth',
              });
        }   
    }, [currentLineIndex])

    return (
        <div className="lyrics">
            {lines?.map((line, idx) => 
                <p 
                    key={idx}
                    className={currentLineIndex === idx ? 'current-line' : null} 
                    ref={currentLineIndex === idx ? lyricsLine : null}
                >
                    {line.text}
                </p>)}
      </div>
    )
};

export default Lyrics;