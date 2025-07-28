"use client";

import ReactPlayer from "react-player";

export default function CustomYouTubePlayer() {
  return (
    <>
      <div className="relative w-full aspect-video p-1 overflow-clip">
        <ReactPlayer
          src="https://www.youtube.com/watch?v=zrlYnaZftEQ"
          width="100%"
          height="100%"
          config={{
            youtube: {
              color: "white",
            },
          }}
        />
      </div>
    </>
  );
}
