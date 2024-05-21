import React, { useState } from "react";

export default function DropDown({ onClick, btnText }) {
  let [isClicked, setIsClicked] = useState(false);
  // let [btnText, setBtnText] = useState("Select Color");
  let divStyles = "hidden";
  if (isClicked) divStyles = "flex flex-col block gap-1 pb-2";
  function handleClick() {
    setIsClicked(!isClicked);
  }
  return (
    <>
      <div className="h-62">
        <div className="border-2 rounded-md border-gray-300 px-3">
          <button className="py-2 rounded-md w-44" onClick={handleClick}>
            {btnText}
            <span className="pl-3">
              <i className="fa-solid fa-caret-down"></i>
            </span>
          </button>
          <div className={divStyles}>
            <button
              onClick={() =>{ onClick("bg-teal-500"); setIsClicked(false)}}
              className="py-2 w-44 bg-teal-500 text-white rounded-md"
            >
              Teal
            </button>
            <button
              onClick={() => {onClick("bg-amber-600"); setIsClicked(false)}}
              className="w-44 py-2 bg-amber-600 text-white rounded-md"
            >
              Amber
            </button>
            <button
              onClick={() =>{ onClick("bg-purple-700"); setIsClicked(false)}}
              className="w-44 py-2 bg-purple-700 text-white rounded-md"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
