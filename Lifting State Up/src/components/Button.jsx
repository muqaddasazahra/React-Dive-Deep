
export default function Button({ text,count, onClick}) {

//-------Lifted this state up-----------
//  const [count,setCount]=useState(0)
//  function handleClick() 
//  {
//     setCount(count+1)
//  }
  return (
    <button onClick={onClick} className="bg-purple-700 text-white px-6 py-3 rounded-md">
      {`${text} : ${count}`}
    </button>
  );
}
