import { useRef } from 'react';

const VideoPlayer = () => {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    }

    const handlePause = () => {
        videoRef.current.pause();

    }

    return (
        <div>
            <video
                ref={videoRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width="400"
                type="video/mp4"
                controls={false} />

            <div>
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>

        </div>
    );
}
export default VideoPlayer