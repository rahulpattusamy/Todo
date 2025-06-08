import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, work: "cricket net practice", day: "Monday", time: "4:30PM" },
  ]);
  if (todos.length === 0) return null;
  return (
    <div>
      <div className="pl-5">
        <TodoForm />
        <TodoTable
          onDelete={(id) => settodos(todos.filter((e) => e.id !== id))}
          todos={todos}
        />
      </div>
    </div>
  );
};

export default App;
