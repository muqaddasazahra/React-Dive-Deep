import { useState } from "react";

export default function Button({ bg_color, isActive, onClick }) {
  let defaultStyles =
    "w-64 p-2 rounded-md shadow-md border-2 border-gray-300 text-gray-300";

  if (isActive) {
    {
      if (bg_color === "Teal")
        defaultStyles = "w-64 p-2 rounded-md shadow-md bg-teal-500 text-white";
      if (bg_color === "Amber")
        defaultStyles = "w-64 p-2 rounded-md shadow-md bg-amber-600 text-white";
    }
  }

  function handleClick(event) {
    if (bg_color === "Amber") {
      event.stopPropagation(); //Click event of Amber Button will never propagate up.
    }
    onClick(bg_color);
  }

  return (
    <>
      <button onClick={handleClick} className={defaultStyles} value={bg_color}>
        {isActive ? `Hey, I am ${bg_color} Button` : "Who Am I?"}
      </button>
    </>
  );
}
