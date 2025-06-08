interface TodoList {
  id: number;
  work: string;
  day: string;
  time: string;
}

interface Props{
todos:TodoList[]
}

const TodoTable = ({todos}:Props) => {
  return (
    <table className="table table-bordered mt-3">
      <thead className="">
        <tr>
          <td className="bg-dark text-white">WORK</td>
          <td className="bg-dark text-white">DAY</td>
          <td className="bg-dark text-white">TIME</td>
          <td className="bg-dark text-white"></td>
        </tr>
      </thead>

      <tbody>
        {todos.map(todo=><tr key={todo.id}>
            <th>{todo.work}</th>
            <th>{todo.day}</th>
            <th>{todo.time}</th>
            <th><button className="btn btn-danger">Delete</button></th>
        </tr>)}
      </tbody>
    </table>
  );
};

export default TodoTable;
