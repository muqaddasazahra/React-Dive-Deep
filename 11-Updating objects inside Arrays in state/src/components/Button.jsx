

export default function Button({text , onClick}) {
  return (
    <button onClick={onClick} className="bg-gray-300 shadow-md px-2 border-2 border-black">{text}</button>
  )
}
