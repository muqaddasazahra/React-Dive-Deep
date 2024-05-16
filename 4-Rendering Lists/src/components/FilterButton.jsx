import Button from "./Button";
export default function FilterButton({ filterButtonClicked, handleClick }) {
  return (
    <>
      {filterButtonClicked ? (
        <>
          <div className="relative">
            <Button onClick={() => handleClick("scientist")} text="Select Profession"/>
             <div
              id="dropdown"
              className="bg-white flex flex-col rounded-md border-slate-300 px-2 border-2 absolute"
            >
              <Button onClick={() => handleClick("chemists") } text="Chemists"/>
              <Button onClick={() => handleClick("non-Chemists")} text="Non-Chemists"/>
              <Button onClick={() => handleClick("scientist")} text="All Scientist"/>
            </div>
          </div>
        </>
      ) : (
        <Button onClick={() => handleClick("filter")} text="Select Profession"/>
      )}
    </>
  );
}
