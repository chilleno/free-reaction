"use client"
import {useState} from "react";

export default function Home() {
  const [volume, setVolume] = useState(100);

  const changeVolume = (e:any) => {
    setVolume(e.target.value);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <iframe
        id="iframe_youtube"
        src="https://www.youtube.com/embed/44Q42FB0v5I?enablejsapi=1&origin=http://localhost:3000&controls=0"
        width="640"
        height="600"
      />
      <div className="flex flex-row gap-5 items-center">
        <button
          id="play"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Play
        </button>
        <button
          id="pause"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Pause
        </button>
        <button
          id="stop"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Stop
        </button>
        <button
          id="mute"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Mute
        </button>
        <div
          id="volume"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-2"
         
        >
          <input type="range" value={volume} onChange={changeVolume} />
          <input id="volume_value_input" type="number" className="text-black max-w-14 text-right" value={volume} onChange={(e) => e.preventDefault} />
        </div>
      </div>
    </main>
  );
}
