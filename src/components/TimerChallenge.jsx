import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  // const [timerStarted, setTimerStarted] = useState(false);
  // const [timerExpired, setTimerExpired] = useState(false);

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    setTimeRemaining(targetTime * 1000);
    dialog.current.open();
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimerRemaining) => prevTimerRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />
      <section className="bg-cyan-400 rounded p-6 flex flex-col items-center min-w-64">
        <h2 className="text-xl font-bold text-gray-900 uppercase">{title}</h2>

        <p className="border-2 rounded px-1 mt-2 border-cyan-500 text-black">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p className="my-6 bg-black py-1 px-2 rounded text-white">
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p
          className={
            timerIsActive
              ? "text-red-700 pulse font-semibold"
              : "text-gray-700 font-semibold"
          }
        >
          {timerIsActive ? "Time is running" : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
