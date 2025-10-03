import { useState }  from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);

  const addTodo = () => {
    if(task.trim() === "") return;
    setTodos([...todos, { text : task }]);
    setTask("");
  };

  return (
    <div className = "min-h-screen flex justify-center bg-blue-100">
      <div className="bg-green-300 shadow-lg rounded-xl px-20 py-10 w-full">

      <h1 className="text-2xl font-bold text-center text-green-700 mb-4">To-Do List</h1>
      <div className="flex flex-col items-center w-full">
        <div className="flex gap-2 w-full max-w-md">
          <input
            type = "text"
            value = {task}
            onChange = {(e) => setTask(e.target.value)}
            placeholder = "Add a new task"
            onKeyDown = {(e) => {
              if(e.key === "Enter") addTodo();
            }}
            className="px-3 py-2 flex-grow rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <button onClick = {addTodo} className="px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition">
            Add
          </button>
        </div>
    
        <ul className="mt-6 w-full max-w-md space-y-2">
          {todos.map((todo, index) => (
            <li key={index} 
              className="flex justify-between items-center px-3 py-2 bg-gray-50 border rounded-lg"
            >
              {editingIndex === index ? (
                <input
                  type = "text"
                  value  = {todo.text}
                  onChange = {(e) => {
                    const newTodos = [...todos];
                    newTodos[index].text = e.target.value;
                    setTodos(newTodos);
                  }}
                  onBlur = {() => setEditingIndex(null)}
                  onKeyDown = {(e) => {
                    if(e.key === "Enter") setEditingIndex(null);
                  }}
                  autoFocus
                  className="flex-grow px-2 py-1 border rounded-md"
                />
                 ) : (
                  <span className="text-green-900">{todo.text}</span>
                 )}
                 <button onClick={() => setEditingIndex(index)} className="ml-2 px-2 py-1 bg-yellow-300 text-white rounded-md hover:bg-yellow-400 transition">
                  Edit
                 </button>
            </li>
          ))}
       </ul>
      </div>
      </div>
    </div>

  );
}

export default App;