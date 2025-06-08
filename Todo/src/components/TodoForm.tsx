
const TodoForm = () => {
  return (
    <form>
        <div className="form-group mt-2  col-md-4 ">
            <input type="text" className="form-control" placeholder="Enter the work" />
        </div>
         <div className="form-group mt-3 col-md-4 ">
            <input type="text" className="form-control" placeholder="Enter the day" />
        </div>
         <div className="form-group mt-3  col-md-4 ">
            <input type="text" className="form-control" placeholder="Enter the time" />
        </div>

        <button className=" mt-3 btn btn-primary">Submit</button>
    </form>
  )
}

export default TodoForm