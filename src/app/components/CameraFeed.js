"use client";

import React, { useEffect, useState } from "react";

const CameraFeed = () => {
  const [camera, setCamera] = useState(null);

  const getCamera = async () => {
    try {
      const cameras = await navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          const video = document.querySelector("video");
          video.srcObject = stream;
          video.onloadedmetadata = (e) => video.play();
        });

      setCamera(cameras);
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
