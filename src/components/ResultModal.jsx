export default function ResultModal({ result, targetTime }) {
  return (
    <dialog className="" open>
      <h2>You {result}</h2>
      <p>
        The target time was <strong>{targetTime} second.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X second left.</strong>
      </p>

      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}