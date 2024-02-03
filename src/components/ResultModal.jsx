import { forwardRef, useImperativeHandle, useRef } from "react";
import {createPortal} from "react-dom";

const ResultModal = forwardRef(function ResultModal({ targetTime, remainingTime, onReset }, ref) {

  const dialog = useRef();
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round( (1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

    return createPortal(
        <dialog ref={dialog} onClose={onReset}
                className="bg-white rounded-lg p-4 text-black text-left max-w-sm mx-auto result-modal mt-64">
            {userLost ? <h2 className="text-3xl text-red-700 font-black">You Lost</h2> :
                <h2 className="font-black text-blue-500 text-xl mb-2">Your Score: {score}</h2>}
            <p>
                The target time was <strong>{targetTime} seconds.</strong>
            </p>
            <p>
                You stopped the timer with <strong>{formattedRemainingTime} seconds left.</strong>
            </p>
            <div className="flex justify-end"> {/* Aggiunto questo div con classi Flexbox per allineare a destra */}
                <button onClick={() => dialog.current.close()}
                        className="mt-4 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-1 px-3 rounded">
                    Close
                </button>
            </div>
        </dialog>,


        document.getElementById('modal')

    );
});

export default ResultModal;
