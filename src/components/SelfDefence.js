import React from "react";
import ReactPlayer from "react-player";

function SelfDefence() {
  const videos = [
    "https://www.youtube.com/watch?v=7JidWSyLX-c", // Replace with actual video IDs
    "https://www.youtube.com/watch?v=WLIE1GKfluk", // Replace with actual video IDs
    "https://www.youtube.com/watch?v=yyV1OuJyT4I", // Replace with actual video IDs
    "https://www.youtube.com/watch?v=fr2dahob6g0", // Replace with actual video IDs
    "https://www.youtube.com/watch?v=M4_8PoRQP8w", // Replace with actual video IDs
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-pink-200">
      <div className="bg-white rounded-tl-3xl rounded-br-3xl shadow-lg p-6 max-w-xs w-full">
        <h2 className="text-xl font-bold mb-4">Self Defence Videos</h2>
        <div className="space-y-4">
          {videos.map((videoUrl, index) => (
            <div key={index} className="w-full">
              <ReactPlayer url={videoUrl} width="100%" controls={true} />
            </div>
          ))}
        </div>
        <button
          onClick={() => window.history.back()}
          className="mt-4 bg-blue-500 text-white text-lg p-2 rounded-md"
        >
          BACK
        </button>
      </div>
    </div>
  );
}

export default SelfDefence;
