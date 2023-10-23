import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, deleteTodo } from "./TodoSlice";
import "./Todo.scss";

const Todo = () => {
  const { todos, msg } = useSelector((state) => state.todo);
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const handleAddTodo = (input) => {
    dispatch(addNewTodo(input));
    setInput("");
  };
  return (
    <div className="my-5">
      <div className="container text-center">
        <div className="row mytodo">
          <div className="col-md-7">
            <div className="card">
              <div className="card-body">
                <h1 className="todotitle">My Todos</h1>
                <hr />
                <div className="d-flex justify-content-center ">
                  <input
                    style={{ height: "37px", borderRadius: "5px" }}
                    type="text"
                    placeholder=" Insert Your Todo"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />{" "}
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddTodo(input)}
                  >
                    Add
                  </button>
                </div>
              </div>

              <br />
              <br />
              <hr />
              <ol>
                {todos.length > 0
                  ? todos.map((item, index) => {
                      return (
                        <li key={index}>
                          {item}{" "}
                          <button
                            className="tododeletebtn "
                            onClick={() => dispatch(deleteTodo(item))}
                          >
                            <i className="bx bx-trash ci "></i>
                          </button>
                        </li>
                      );
                    })
                  : "No todos found"}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
