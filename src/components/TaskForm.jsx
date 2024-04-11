import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom"
import { createTask } from "../features/taskSlice";
function TaskForm() {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(createTask({ text }));
    setText("");
    navigate("/alltasks");
  };
  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="text" style={{fontWeight : 'bolder'}}>Enter Task</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button className="btn btn-block" type="submit">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
}
export default TaskForm;
