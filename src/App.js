import React, { useState, useEffect } from "react";
import "./App.css";
import VideoCard from "./Components/VideoCard";
import db from "./firebase";

function App() {
  const [reels, setReels] = useState([]);

  useEffect(() => {
    //  App Component will run ONCE when it loads, and never again
    db.collection("reels").onSnapshot((snapshot) =>
      setReels(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  console.log(reels);
  return (
    <div className="app">
      <div className="app__videos">
        {/* Container of app__videos(scrollable content) */}
        {reels.map(({ channel, avatarSrc, url, likes, shares }) => (
          <VideoCard
            channel={channel}
            avatarSrc={avatarSrc}
            // song = {song}
            url={url}
            likes={likes}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
