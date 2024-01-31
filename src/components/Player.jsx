import { useState, useRef } from "react";
import TimerChallenge from "./TimerChallenge.jsx";

export default function Player() {
  let buttonClass =
    "py-1 px-2 whitespace-nowrap teinline-flex justify-center items-center  text-sm font-semibold rounded-e-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600";
  let InputClass =
    "py-1 ps-2 block w-full  shadow-sm rounded-s-lg text-sm focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600";

  const playerName = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section className="w-[48rem] h-auto bg-gray-950 rounded-lg mt-20 p-6 flex justify-top flex-col items-center shadow-xl">
      <h1 className="font-black text-3xl">
        THE <span className="text-blue-500">ALMOST</span> FINAL COUNT DOWN
      </h1>
      <span className="text-gray-500">
        Stop the timer once you estimate that times is (almost) up
      </span>

      <div className="mt-4 flex flex-col gap-4 text-xl ">
        <label className="font-bold text-teal-600">
          Welcome {enteredPlayerName ?? "unknown entity"}
        </label>
        <div>
          <div className="flex rounded-lg shadow-sm">
            <input type="text" className={InputClass} ref={playerName} />
            <button className={buttonClass} onClick={handleClick}>
              Set Name
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-12">
        <TimerChallenge title={"Easy"} targetTime={1} />
        <TimerChallenge title={"Not Easy"} targetTime={5} />
        <TimerChallenge title={"Pretty Tough"} targetTime={10} />
        <TimerChallenge title={"Pros only"} targetTime={15} />
      </div>
    </section>
  );
}
