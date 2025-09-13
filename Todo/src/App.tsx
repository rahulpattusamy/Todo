import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

interface Todos {
  id: number;
  title: string;
  completed: number; 
}

const API_URL = "http://localhost/todoapi/api.php"; 

function App() {
  const [todos, setTodos] = useState<Todos[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  // Fetch all todos
  const fetchTodos = () => {
    axios
      .get<Todos[]>(API_URL)
      .then((res) => setTodos(res.data))
      .catch((err) => console.error(err));
  };

  // Add new todo
  const addTodo = () => {
    if (!newTodo.trim()) return;
    axios
      .post(API_URL, { title: newTodo })
      .then(() => {
        setNewTodo("");
        fetchTodos();
      })
      .catch((err) => console.error(err));
  };

  // Toggle completed
  const toggleTodo = (id: number, completed: number) => {
    axios
      .put(API_URL, { id, completed: completed ? 0 : 1 })
      .then(() => fetchTodos())
      .catch((err) => console.error(err));
  };

  // Delete todo
  const deleteTodo = (id: number) => {
    axios
      .delete(API_URL, { data: { id } })
      .then(() => fetchTodos())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-primary shadow">
        <div className="container">
          <a href="/" className="navbar-brand fw-bold">
            📋 Todo Manager
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container flex-grow-1 py-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            {/* Input Card */}
            <div className="card shadow mb-4">
              <div className="card-body d-flex">
                <input
                  required
                  type="text"
                  className="form-control me-2"
                  placeholder="Enter a new task..."
                  value={newTodo}
                  onChange={(e) => setNewTodo(e.target.value)}
                />
                <button className="btn btn-success" onClick={addTodo}>
                  ➕ Add
                </button>
              </div>
            </div>

            {/* Todo List */}
            <div className="card shadow">
              <div className="card-header bg-white fw-bold">Your Tasks</div>
              <ul className="list-group list-group-flush">
                {todos.length === 0 && (
                  <li className="list-group-item text-center text-muted">
                    No tasks yet. Add one above 👆
                  </li>
                )}
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className="list-group-item d-flex justify-content-between align-items-center"
                  >
                    <span
                      onClick={() => toggleTodo(todo.id, todo.completed)}
                      className={
                        todo.completed
                          ? "text-decoration-line-through text-muted"
                          : ""
                      }
                      style={{ cursor: "pointer" }}
                    >
                      {todo.title}
                    </span>
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      ❌
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-auto">
        <small>Made with using React + Bootstrap + PHP</small>
      </footer>
    </div>
  );
}

export default App;


