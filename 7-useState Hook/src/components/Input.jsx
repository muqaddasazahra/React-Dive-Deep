

export default function Input({placeholder, onChange, value}) {
  
  return (
    <input onChange={onChange} value={value} className="w-64 h-12 p-2 border-b-gray-400 border-b-2 focus:border-0 focus:border-b-2" placeholder={placeholder}/>
  )
}
