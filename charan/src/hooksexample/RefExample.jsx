import React, { useEffect, useRef, useState } from 'react';
import VIDEO from './Video.mp4';

const RefExample = () => {
    const [play, setPlay] = useState(true);
    const eleRef = useRef();
    const videoRef = useRef();

    useEffect(() => {
        eleRef.current.style.color = "crimson";
        eleRef.current.innerText = "React Ref";
    }, []); 

    const playORpause = () => {
        if (play) {
            videoRef.current.play();
            console.log(play)
            setPlay(false);
        } else {
            videoRef.current.pause();
            console.log(play);
            setPlay(true);
        }
        setPlay(!play);
    };

    return (
        <div>
            <h1 ref={eleRef}>RefExample</h1>
            <video src={VIDEO} ref={videoRef} onClick={playORpause} width="400" height="500" controls></video>
        </div>
    );
};

export default RefExample;
