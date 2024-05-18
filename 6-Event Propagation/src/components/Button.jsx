

export default function Button({ bg_color, isActive, onClick}) {
  let styles = "w-64 p-2 text-white rounded-md shadow-md";
  if (bg_color === "Teal") styles += " bg-teal-500";
  if (bg_color === "Amber") styles += " bg-amber-600";

  

  function handleClick(event) {
   

    if (bg_color=== "Amber") {
      event.stopPropagation(); //Click event of Amber Button will never propagate up.
    }
    onClick(bg_color);
  }

  return (
    <>
      <button onClick={handleClick} className={styles} value={isActive}>
        {isActive? `Hey, I am ${bg_color} Button` : "Who Am I?"}
      </button>
    </>
  );
}
