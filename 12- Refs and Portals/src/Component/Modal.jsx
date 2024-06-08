import React, { useImperativeHandle, useRef, useState } from "react";
import { forwardRef } from "react";
import {createPortal} from "react-dom"

const Modal = forwardRef(function Modal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  let result;
  if (remainingTime <= 0) result = "Lost";
  else result = "Won";

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return (
    createPortal(<dialog
      ref={dialog}
      className="rounded-md shadow-lg w-fit h-fit p-20 backdrop:bg-black backdrop:opacity-60"
      onClose={onReset}
    >
      <h1 className="text -teal-700 text-4xl font-serif font-semibold">
        You {result}
      </h1>
      <p className="text-xl ">
        Target time was <strong>{targetTime} seconds.</strong>
      </p>
      { result === "Lost" ? (
        <p className="text-xl">You did not stop the timer within <strong>{targetTime} seconds</strong></p>
      ) : (
        <p className="text-xl">
          you stopped the timer with{" "}
          <strong>{(remainingTime / 1000).toFixed(2)} seconds left</strong>
        </p>
      )}
      <form method="dialog">
        <button className="bg-gradient-to-r from-teal-500 to-teal-700 px-10 text-white rounded-md shadow-sm py-2 mt-5">
          Close
        </button>
      </form>
    </dialog>, document.getElementById("modal"))
  );
});

export default Modal;
