import React, { useRef, useState } from "react";
import IMAGE from "./photo1.jpg"; 
import AUDIO from "./song1.mp3"; 
import AUDIO1 from "./song3.mp3";

const RefExample1 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();
    const [isPlayingSong3, setIsPlayingSong3] = useState(false);

    const audioRef1 = useRef();
    const song3Ref = useRef();

    const playOrPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const playOrPauseSong3 = () => {
        if (isPlayingSong3) {
            song3Ref.current.pause();
        } else {
            song3Ref.current.play();
        }
        setIsPlayingSong3(!isPlayingSong3);
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
            {/* Another audio */}
            <audio ref={audioRef1} src={AUDIO1} />
            <h3>Play/Pause Song3</h3>
            <button onClick={playOrPauseSong3}>
                {isPlayingSong3 ? "Pause" : "Play"} Song3
            </button>
            <audio ref={song3Ref} src={AUDIO1} />
        </div>
    );
};

export default RefExample1;
