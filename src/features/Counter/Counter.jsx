import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";
import { decrement, increment, random, reset } from "./CounterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="my-5">
      <div className="container">
        <div className="row ">
          <div className="col-md-6 text-center">
            <div className="card">
              <div className="card-header">
                <h1>Counter</h1>
              </div>
              <hr />
              <div className="card-body">
                <h1>{count}</h1>
                <hr />
                <button
                  className="btn btn-primary"
                  onClick={() => dispatch(increment())}
                >
                  ++
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-success"
                  onClick={() => dispatch(decrement())}
                >
                  --
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-warning"
                  onClick={() => dispatch(reset())}
                >
                  Reset
                </button>{" "}
                &nbsp;
                <button
                  className="btn btn-danger"
                  onClick={() => dispatch(random(1000))}
                >
                  Random
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
