export default function TimerChallenge({ title, targetTime }) {
  return (
    <section className="bg-cyan-400 rounded p-6 flex flex-col items-center ">
      <h2 className="text-xl font-bold text-gray-900 uppercase">{title}</h2>
      <p className="border-2 rounded px-1 mt-2 border-cyan-500 text-black">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <p className="my-6 bg-black py-1 px-2 rounded text-white">
        <button>Start Challenge</button>
      </p>
      <p className="text-gray-700 ">Time is running... / timer inactive</p>
    </section>
  );
}
