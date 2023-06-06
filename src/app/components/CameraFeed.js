"use client";
import { useEffect, useRef } from "react";

const VideoCanvas = () => {
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    // Access the user's camera and stream the video
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
      })
      .catch((error) => {
        console.log("Error accessing camera:", error);
      });

    // Draw the video frames onto the canvas
    const drawVideo = () => {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
      requestAnimationFrame(drawVideo);
    };

    // Call the drawVideo function to start drawing the video frames
    drawVideo();
  }, []);

  return (
    <div>
      <video ref={videoRef} autoPlay muted />
      <canvas ref={canvasRef} />
    </div>
  );
};

export default VideoCanvas;
