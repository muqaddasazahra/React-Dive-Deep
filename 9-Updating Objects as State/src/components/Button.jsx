import React from "react";

export default function Button({
  unfilled,
  value,
  onClick,
  text,
  color = "bg-indigo-600 text-white",
}) {
  return (
    <>
      {unfilled ? (
        <button onClick={onClick} className="text-lg h-8 w-20 text-white border-2 border-white rounded-md">{text}</button>
      ) : (
        <button onClick={onClick} className={`h-8 w-24 rounded-md ${color}`}>
          {text}
        </button>
      )}
    </>
  );
}
