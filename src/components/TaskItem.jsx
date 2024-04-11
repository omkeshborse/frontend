import { useDispatch } from "react-redux";
import { deleteTask, getTasks } from "../features/taskSlice";
import { TiDeleteOutline } from "react-icons/ti";
function TaskItem({ task }) {
  const dispatch = useDispatch();
  return (
    <div className="task">
      <div>{new Date(task.createdAt).toLocaleString("en-IN")}</div>
      <h2>{task.text}</h2>
      <button
        onClick={() => {
            console.log("clccccccccc");
          dispatch(deleteTask(task._id));
          dispatch(getTasks())
        }}
        className="close"
      >
        <TiDeleteOutline className="circle" />
      </button>
    </div>
  );
}
export default TaskItem;
