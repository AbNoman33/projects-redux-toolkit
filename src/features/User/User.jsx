import { useDispatch, useSelector } from "react-redux";
import "./User.scss";
import { useEffect, useState } from "react";
import { createUser, deleteUser, fetchAllUsers } from "./UserApi";
import { getAllUserData } from "./UserSlice";

const User = () => {
  const dispatch = useDispatch();

  const { users, loading } = useSelector(getAllUserData);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserCreate = (e) => {
    e.preventDefault();
    dispatch(createUser(input));
    setInput({
      name: "",
      email: "",
      password: "",
      role: "",
    });
  };

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <div className="container my-5">
      <div className="row my-5 justify-content-center">
        <div className="col-md-4">
          <div className="card my-5">
            <div className="card-header">
              <h1 className="text-center">Create New User</h1>
            </div>
            <div className="card-body">
              <form onSubmit={handleUserCreate}>
                <div className="m-3">
                  <input
                    type="text"
                    placeholder="name"
                    className="form-control"
                    value={input.name}
                    name="name"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="m-3">
                  <input
                    type="text"
                    placeholder="email"
                    className="form-control"
                    value={input.email}
                    name="email"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="m-3">
                  <input
                    type="text"
                    placeholder="password"
                    className="form-control"
                    value={input.password}
                    name="password"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="m-3">
                  <input
                    type="text"
                    placeholder="role"
                    className="form-control"
                    value={input.role}
                    name="role"
                    onChange={handleInputChange}
                  />
                </div>
                <div className="m-3 ">
                  <button className="btn btn-primary ">Add</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <h2>Users</h2>
          <hr />
          {loading && <h2>Loading ......</h2>}
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0
                ? users.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => dispatch(deleteUser(item._id))}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : "No data found"}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default User;
