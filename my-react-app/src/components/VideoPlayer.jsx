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
        <div className='mt-3 flex flex-col items-center justify-center'>
            <video
                ref={videoRef}
                src="https://www.w3schools.com/html/mov_bbb.mp4"
                width="400"
                type="video/mp4"
                controls={false}
                className='border-2' />

            <div className='mt-3 flex items-center justify-center'>
                <button className="px-4 py-2 bg-yellow-500 mr-2 rounded" onClick={handlePlay}>▶️</button>
                <button className=" px-4 py-2 bg-blue-300 rounded" onClick={handlePause}>⏸️</button>
            </div>

        </div>
    );
}
export default VideoPlayer