export default function FilterButton({ filterButtonClicked, handleClick }) {
  return (
    <>
      {filterButtonClicked ? (
        <>
          <div className="relative">
            <button
              onClick={() => handleClick("scientist")}
              className="bg-white py-2 px-2 border-blue-600 border-2 text-blue-600 rounded-md "
            >
              Select Profession
            </button>

            <div
              id="dropdown"
              className="bg-white flex flex-col rounded-md border-slate-300 px-2 border-2 absolute"
            >
              <button
                onClick={() => handleClick("chemists")}
                className="bg-white py-2 px-2 text-blue-600 border-b-2 border-b-slate-300"
              >
                Chemists
              </button>
              <button
                onClick={() => handleClick("non-Chemists")}
                className="bg-white py-2 px-2 text-blue-600 border-b-2 border-b-slate-300"
              >
                Non-Chemists
              </button>
              <button
                onClick={() => handleClick("scientist")}
                className="bg-white py-2 px-2 text-blue-600"
              >
                All Scientists
              </button>
            </div>
          </div>
        </>
      ) : (
        <button
          onClick={() => handleClick("filter")}
          className="bg-white py-2 px-2 border-blue-600 border-2 text-blue-600 rounded-md "
        >
          Select Profession
        </button>
      )}
    </>
  );
}
