import React from 'react';
import './BackgroundVideo.css';
import videoFile from './pfv.mp4';
import TextOverlay from './TextOverlay';

const BgVideo = () => {
  return (
    <div className="video-container">
      <video autoPlay loop muted className="background-video">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <TextOverlay />
    </div>
  );
};

export default BgVideo;