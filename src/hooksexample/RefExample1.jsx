import React, { useRef, useState } from "react";
import IMAGE from "./photo.jpg"; 
import AUDIO from "./song.mp3"; 

const RefExample1 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    const playOrPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <h1>Assignment</h1>
            <h3>Click the Image to Play/Pause Song</h3>
            <img 
                src={IMAGE} 
                alt="Click to Play/Pause" 
                onClick={playOrPause} 
                style={{ width: "1000px", cursor: "pointer" }} 
            />
            <audio ref={audioRef} src={AUDIO} />
        </div>
    );
};

export default RefExample1;
