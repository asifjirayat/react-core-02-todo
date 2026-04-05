import { useState } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  /* Handle input change */
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  /* Add Todo */
  const handleAddTodo = () => {
    if (!input.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  /* Delete Todo */
  const handleDeleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  /* Toggle Todo */
  const handleToggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>

      {/* Input */}
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={input}
          placeholder="Add a task"
          className="border p-2 rounded"
          onChange={handleInputChange}
        />
        <button
          className="bg-blue-500 text-white px-4 rounded"
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="w-full max-w-md space-y-2">
        {todos.length === 0 && (
          <p className="text-gray-500 text-center">No todos yet</p>
        )}

        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white p-3 rounded shadow flex justify-between items-center"
          >
            <span
              className={`cursor-pointer ${todo.completed ? "line-through text-gray-400" : ""}`}
              onClick={() => handleToggleTodo(todo.id)}
            >
              {todo.text}
            </span>

            <button
              className="text-red-500"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
