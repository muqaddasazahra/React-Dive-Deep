export default function SearchBar()
{
    return <div className="my-4 mx-4 ">
        <form action="" >
            <input type="text" placeholder="   Type Item Name here  "  className="border-black border-2 rounded-md my-2" /> <br />
            <input id="check" type="checkbox" /> <label htmlFor="check"> Only show products in stock</label>
        </form>
    </div>
}