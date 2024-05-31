import { useState } from "react";
import Button from "./components/Button";

export default function App() {
  const initialTodos = [
    { id: 0, title: "Buy milk", done: true },
    { id: 1, title: "Eat tacos", done: false },
    { id: 2, title: "Brew tea", done: false },
  ];

  const [todos, setTodos] = useState(initialTodos);
  const [todoText, setTodoText] = useState("");
  const [btnText, setBtnText]=useState("Add")
  const [editId,setEditId]=useState()

  function handleAddTask() {
    let id = todos.length;
    if (todoText) {
      setTodos((todos) => {
        return [
          ...todos,
          {
            id,
            title: todoText,
            done: false,
          },
        ];
      });
      setTodoText("");
    }
  }

  function handleDeleteTask(id) {
    todos.map((todo) => {
      if (todo.id === id) {
        let updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
      }
    });
  }

  function handleEditTask(id) {
    setBtnText("Save")
    setEditId(id);
    todos.map(todo=>
            {
              if(todo.id===id)
              {setTodoText(todo.title)
              }
            }
          )
        
    }

    function handleSaveTask(id) {
      setTodos(todos=>{ return todos.map(todo=>
              {
                if(todo.id===id)
                {
                 setBtnText("Add")
                 return {
                  ...todo,
                  title:todoText
                 }
                }
                else
              {
               return todo;
              }
            }
            )
     } )
      }

  

  return (
    <div className="h-screen w-full flex justify-center items-center ">
      <div className="h-fit w-1/3 border-2 border-gray-300 shadow-md flex flex-col gap-2 justify-start items-center py-10">
        <h1 className="text-2xl">To Do List</h1>
        <div className="flex gap-2">
          <input
            className="border-2 border-gray-300"
            type="text"
            value={todoText}
            onChange={(e) => setTodoText(e.target.value)}
          />
          <Button text={btnText} onClick={btnText==="Add" ? handleAddTask : ()=>handleSaveTask(editId)} />
        </div>

        <div className="flex flex-col p-10 gap-2">
          {todos.map((todo) => {
            return (
              <div className="flex gap-5" key={todo.id}>
                <p className="w-20">{todo.title}</p>
                <div className="flex gap-1">
                <Button text="Edit" onClick={() => handleEditTask(todo.id)} />
                <Button
                  text="Delete"
                  onClick={() => handleDeleteTask(todo.id)}
                />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
