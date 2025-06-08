import { Days } from "./day";

interface TodoList {
  id: number;
  work: string;
  day: string;
  time: string;
}

interface Props {
  todos: TodoList[];
  onDelete: (id: number) => void;
  onSelectday: (day: string) => void;
}

const TodoTable = ({ todos, onDelete, onSelectday }: Props) => {
  return (
    <table className="table table-bordered mt-3">
      <thead className="">
        <tr>
          <td className="bg-dark text-white">WORK</td>
          <td className="bg-dark text-white">
            <select name="" id="" onChange={(event)=>onSelectday(event.target.value)}>
              <option value="">FULL WEEK</option>
              {Days.map((day) => (
                <option  key={day} value={day}>{day.toUpperCase()}</option>
              ))}
            </select>
          </td>
          <td className="bg-dark text-white">TIME</td>
          <td className="bg-dark text-white"></td>
        </tr>
      </thead>

      <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <th>{todo.work}</th>
            <th>{todo.day.toUpperCase()}</th>
            <th>{todo.time.toUpperCase()}</th>
            <th>
              <button
                className="btn btn-danger"
                onClick={() => onDelete(todo.id)}
              >
                Delete
              </button>
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TodoTable;
