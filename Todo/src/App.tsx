import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoTable from "./components/TodoTable";

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, work: "cricket net practice", day: "Monday", time: "4:30PM" },
    { id: 2, work: "Gym session", day: "Monday", time: "6:30PM" },
    { id: 3, work: "cardio", day: "Tuesday", time: "5:30AM" }
  ]);
  const [selectedday, setSelectedday] = useState("");

  if (todos.length === 0) return null;

  const visibleday = selectedday
    ? todos.filter((todo) => todo.day == selectedday)
    : todos;
  return (
    <div>
      <div className="pl-5">
        <TodoForm
          onSubmit={(data) =>
            settodos([...todos, { ...data, id: todos.length + 1 }])
          }
        />
        <TodoTable
          onDelete={(id) => settodos(todos.filter((e) => e.id !== id))}
          todos={visibleday}
          onSelectday={(day) => setSelectedday(day)}
        />
      </div>
    </div>
  );
};

export default App;
