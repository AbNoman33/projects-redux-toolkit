import { useDispatch } from "react-redux";
import "./Student.scss";
import { addNewStudent } from "./StudentSlice";

const Student = () => {
  const dispatch = useDispatch();
  const devs = {
    name: "Noman",
    age: 34,
    skill: "mern",
  };
  return (
    <div className="my-5">
      <hr />
      <div
        className="container my-5
    "
      >
        <div className="text-center">
          <button
            className="btn btn-info"
            onClick={() => dispatch(addNewStudent(devs))}
          >
            Add new student
          </button>
        </div>
      </div>
    </div>
  );
};

export default Student;
