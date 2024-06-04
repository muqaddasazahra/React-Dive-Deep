

export default function Challenge({text, targetTime}) {
  return (
    <section className="flex bg-white w-[45%] h-[80%] p-20 rounded-md shadow-md flex-col justify-center items-center gap-2">
    <h1 className="text-2xl font-bold">{text}</h1>
    <p className="text-xl font-medium">Target Time : {targetTime} </p>
    <button className="bg-gradient-to-r from-teal-500 to-teal-700 px-10 text-white rounded-md shadow-sm py-2">Stop</button>
    <p className="text-sm">Timer is running.........</p>  
    </section>
  )
}
