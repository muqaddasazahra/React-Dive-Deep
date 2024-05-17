

export default function Button({text,onClick}) {

  let styles="bg-white py-2 px-2 text-blue-600"

  if(text==="Select Profession") styles+=" border-blue-600 border-2 rounded-md"
  else if(text==="Chemists" || text==="Non-Chemists") styles+=" border-b-2 border-b-slate-300"

  return (
  <button onClick={onClick} className={styles} >
   {text}
  </button>
  )
}
