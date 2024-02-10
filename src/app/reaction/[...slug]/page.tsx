"use client"
import { useState } from "react";

export default function Home({ params }: { params: { slug: string } }) {
  const [volume, setVolume] = useState(100);
  const [startAt, setStartAt] = useState(params.slug[1]);

  const changeVolume = (e: any) => {
    setVolume(e.target.value);
  }

  console.log(params.slug)

  return (
    <main className="flex flex-col items-center gap-5">
      <iframe
        id="iframe_youtube"
        src={"https://www.youtube.com/embed/"+params.slug[0]+"?enablejsapi=1&origin=http://localhost:3000&controls=0"}
        width="640"
        height="340"
      />
      <div id="reaction_control_buttons" className="flex flex-row gap-5 items-center hidden">
        <div className="flex gap-5">
          <button
            id="play_button_reaction"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hidden"
          >
            Play
          </button>
          <button
            id="pause_button_reaction"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Pause
          </button>
        </div>

        <div
          id="volume"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-2"
        >
          <input type="range" value={volume} onChange={changeVolume} />
          <input id="volume_value_input" type="number" className="text-black max-w-14 text-right rounded-sm" value={volume} readOnly onChange={(e) => e.preventDefault} />
        </div>
        <div
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex gap-2"
        >
          <h6 id="reaction_current_time_formatted">0:00</h6>
          <input id="reaction_current_time" type="number" className="text-black max-w-14 text-right rounded-sm hidden" />
          <input id="reaction_start_at" defaultValue={startAt} type="number" className="text-black max-w-14 text-right rounded-sm hidden" />
          <input id="is_reaction_running" type="number" className="text-black max-w-14 text-right rounded-sm hidden" />
        </div>
      </div>
    </main>
  );
}
