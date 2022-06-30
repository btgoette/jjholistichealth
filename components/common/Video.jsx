import { Player, BigPlayButton } from "video-react";
import "node_modules/video-react/dist/video-react.css";

const Video = (video) => {
  return (
    <div className="video">
      <Player
        preload="auto"
        muted
        autoPlay="true"
        src={video.src}
        poster={video.poster}
      >
        <BigPlayButton position="center" />
      </Player>
    </div>
  );
};

export default Video;
