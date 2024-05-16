

export default function Text({title,text}) {
  return (
    <div>
      {title? <h1 className="text-teal-700 text-6xl bg-white absolute top-0 left-auto translate-x-[-12.75rem] top-auto translate-y-[-1.5rem] font-bold tracking-wide">{text}</h1>: <h3 className="italic text-2xl text-bold text-teal-700">{text}</h3>}
      </div>
  )
}
