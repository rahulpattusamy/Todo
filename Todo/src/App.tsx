import TodoForm from "./components/TodoForm"
import TodoTable from "./components/TodoTable"

const App = () => {
  const todos = [{id:1, work:"cricket net practice", day:"Monday", time:"4:30PM"}]
  return (
    <div>
      <div className="pl-5">

         <TodoForm/>
         <TodoTable todos={todos}/>
        </div>  
    
    </div>
  )
}

export default App
