"use client";

import React, { useEffect, useRef } from "react";

const CameraFeed = () => {
  const videoRef = useRef(null);

  const getCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => videoRef.current.play();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (videoRef.current) getCamera();
  }, [videoRef]);

  return (
    <div>
      <video ref={videoRef} id="camera-box" muted>
        {" "}
      </video>
    </div>
  );
};

export default CameraFeed;
