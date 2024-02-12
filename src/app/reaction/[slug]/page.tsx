"use client"
import { useState } from "react";

export default function Home({ params }: { params: { slug: string } }) {
  const [volume, setVolume] = useState(100);
  const [startAt, setStartAt] = useState(159);

  const changeVolume = (e: any) => {
    setVolume(e.target.value);
  }

  return (
    <main className="flex flex-col items-center gap-5 mt-2">
      <iframe
        id="iframe_youtube"
        src={"https://www.youtube-nocookie.com/embed/"+params.slug+"?enablejsapi=1&origin=https://www.reaction-free.com&controls=0"}
        width="590"
        height="330"
      />
      <div id="reaction_control_buttons" className="flex flex-row gap-5 items-center hidden">
        <div className="flex gap-5">
          <button
            id="play_button_reaction"
            className="bg-[#2f6b2f] hover:bg-[#4ca84c] hover:text-slate-100 text-white font-bold py-2 px-4 rounded hidden"
          >
            Play
          </button>
          <button
            id="pause_button_reaction"
            className="bg-[#2f6b2f] hover:bg-[#4ca84c] hover:text-slate-100 text-white font-bold py-2 px-4 rounded"
          >
            Pause
          </button>
        </div>

        <div
          id="volume"
          className="bg-[#2f6b2f] hover:bg-[#4ca84c] hover:text-slate-100 text-white font-bold py-2 px-4 rounded flex gap-2"
        >
          <input type="range" value={volume} onChange={changeVolume} />
          <input id="volume_value_input" type="number" className="text-black max-w-14 text-right rounded-sm" value={volume} readOnly onChange={(e) => e.preventDefault} />
        </div>
        <div
          className="bg-[#2f6b2f] hover:bg-[#4ca84c] hover:text-slate-100 text-white font-bold py-2 px-4 rounded flex gap-2"
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
