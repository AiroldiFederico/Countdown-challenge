import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TimerChallenge({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  function handlestop() {}

  return (
    <section className="bg-cyan-400 rounded p-6 flex flex-col items-center min-w-64">
      <h2 className="text-xl font-bold text-gray-900 uppercase">{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="border-2 rounded px-1 mt-2 border-cyan-500 text-black">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p className="my-6 bg-black py-1 px-2 rounded text-white">
        <button onClick={handleStart}>
          {timerStarted ? "Stop" : "Start"} Challenge
        </button>
      </p>
      <p
        className={
          timerStarted
            ? "text-red-700 pulse font-semibold"
            : "text-gray-700 font-semibold"
        }
      >
        {timerStarted ? "Time is running" : "Timer inactive"}
      </p>
    </section>
  );
}
