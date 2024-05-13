import people from "../data";

export default function List({ listType, typedText }) {
  let profiles = people;

  if (listType === "chemists") {
    profiles = people.filter((person) => {
      return person.profession === "chemist";
    });
  } else if (listType === "non-Chemists") {
    profiles = people.filter((person) => {
      return person.profession !== "chemist";
    });
  }
  if (listType && typedText) {
    profiles = profiles.filter((person) => {
      return (
        person.profession.toLowerCase().indexOf(typedText.toLowerCase()) !== -1
      );
    });
  } else if (!listType && typedText) {
    profiles = people.filter((person) => {
      return (
        person.profession.toLowerCase().indexOf(typedText.toLowerCase()) !== -1
      );
    });

  }
  return (
    <>
      <div className="h-fit w-full flex items-center justify-center gap-3">
        {profiles.length===0 ? (
          <div className="text-red-400 font-bold text-2xl w-54 p-4 ">
            No Such Profile Exists!!
          </div>
        ) : (
          profiles.map((person) => (
            // {one list item is rendering multiple DOM NodeList, so grouping them into div and passing key}
            <div
              key={person.id}
              className=" border-blue-400 border-2 shadow-blue-300 shadow-md text-center flex flex-col justify-center items-center w-56 h-52 gap-1 p-5"
            >
              <h1 className="font-bold text-2xl text-blue-600  text-center">
                {person.name}
              </h1>
              <p className="font-medium ">
                {person.profession.charAt(0).toUpperCase() +
                  person.profession.slice(1)}
              </p>
              <p className="font-medium ">
                {person.accomplishment.charAt(0).toUpperCase() +
                  person.accomplishment.slice(1)}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  )}

