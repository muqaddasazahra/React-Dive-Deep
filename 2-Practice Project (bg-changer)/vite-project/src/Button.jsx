
export default function Button({text, colorSetter, ...props})
 {   const color=text.toLowerCase();

    function handleClick()
    {
        colorSetter(color)
    }
 

return <div>
    <button className='px-6 py-3 shadow-md rounded-3xl' style={{backgroundColor:color}} onClick={handleClick} {...props}>{text}</button>
  </div>

 }