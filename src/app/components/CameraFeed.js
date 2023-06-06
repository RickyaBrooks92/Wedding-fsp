"use client";

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

  useEffect(() => {
    getCamera();
  }, []);

  return (
    <div>
      <video id="camera-box"> </video>
    </div>
  );
};

export default CameraFeed;
