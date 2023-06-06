"use client";

import React, { useEffect } from "react";

const CameraFeed = () => {
  const getCamera = async () => {
    try {
      await navigator.mediaDevices
        .getUserMedia({
          video: true,
        })
        .then((stream) => {
          const video = document.querySelector("video");
          video.srcObject = stream;
          video.onloadedmetadata = (e) => video.play();
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCamera();
  }, []);

  return (
    <div>
      <video id="camera-box" muted>
        {" "}
      </video>
    </div>
  );
};

export default CameraFeed;
