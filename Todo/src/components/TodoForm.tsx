import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const schema = z.object({
  work: z.string().min(3),
  day: z.string().min(3),
  time: z.string().min(3),
});

type TodoData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: TodoData) => void;
}

const TodoForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset } = useForm({
    resolver: zodResolver(schema),
  });
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data), reset();
      })}
    >
      <div className="form-group mt-2  col-md-4 ">
        <input
          {...register("work")}
          type="text"
          className="form-control"
          placeholder="Enter the work"
        />
      </div>
      <div className="form-group mt-3 col-md-4 ">
        <input
          {...register("day")}
          type="text"
          className="form-control"
          placeholder="Enter the day"
        />
      </div>
      <div className="form-group mt-3  col-md-4 ">
        <input
          {...register("time")}
          type="text"
          className="form-control"
          placeholder="Enter the time"
        />
      </div>

      <button className=" mt-3 btn btn-primary">Submit</button>
    </form>
  );
};

export default TodoForm;
