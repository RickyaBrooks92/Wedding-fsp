"use client";

import { get } from "http";
import React, { useEffect } from "react";

const CameraFeed = () => {
  const getCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      const video = document.querySelector("video");
      video.srcObject = stream;
      video.onloadedmetadata = () => video.play();
    } catch (error) {
      console.log(error);
    }
  };

  const startVideo = () => {
    const video = document.querySelector("video");
    video.play();
  };

  useEffect(() => {
    getCamera();
  }, []);

  return (
    <div>
      <button onClick={startVideo}>Start Video</button>
      <video id="camera-box"> </video>
    </div>
  );
};

export default CameraFeed;
