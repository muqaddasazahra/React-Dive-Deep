import { useState } from "react";

export default function Button({ bg_color }) {
  let styles = "w-64 p-2 text-white rounded-md shadow-md";
  if (bg_color === "Teal") styles += " bg-teal-500";
  if (bg_color === "Amber") styles += " bg-amber-600";

  const [btnText, setBtnText] = useState("Who Am I");

  function handleClick(event) {
    setBtnText(`Hey, I am ${bg_color} Button`);

    if (event.target.value === "Amber") {
      event.stopPropagation(); //Click event of Amber Button will never propagate up.
    }
  }

  return (
    <>
      <button onClick={handleClick} className={styles} value={bg_color}>
        {btnText}
      </button>
    </>
  );
}
