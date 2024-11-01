import React, { useRef, useState } from "react";
import "./VideoCard.css";
import VideoHeader from "./VideoHeader";
import VideoFooter from "./VideoFooter";

function VideoCard({ url, likes, shares, channel, avatarSrc }) {
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  //useState
  //useRef
  return (
    <div className="videoCard">
      <VideoHeader />
      <video
        ref={videoRef}
        className="videoCard__player"
        src={url}
        alt="IG reel video"
        loop
      />
      <VideoHeader />
      <VideoFooter
        channel={channel}
        likes={likes}
        shares={shares}
        avatarSrc={avatarSrc}
        // song={song}
      />
    </div>
  );
}

export default VideoCard;
