
// The following exercise contains the following subjects:
// ● useRef
// Instructions
// Let's create a simple native video player.
// Find out how to display a video without any external
// libraries using react.
// Create a play and pause button that will play and pause
// your video. Demo




import { useRef } from "react";


const Video = () => {
    const pauseStart = useRef(null);
    const play = () => {
        pauseStart.current.play()
    }
    const pause = () => {
        pauseStart.current.pause()
    }
    const src = "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
    return (
        <>

            <video ref={pauseStart}>
                <source src={src} type="video/mp4" />
                Sorry, your browser doesn't support embedded videos.
            </video>


            <button onClick={play}>play</button>
            <button onClick={pause}>pause</button>
        </>


    );
};

export default Video;


