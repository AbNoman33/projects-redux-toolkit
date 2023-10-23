import Counter from "./features/Counter/Counter";
import Todo from "./features/Todo/Todo";

//import Student from "./features/student/Student";

import User from "./features/User/User";

function App() {
  return (
    <>
      <Todo />

      <br />
      <br />
      <Counter />

      <br />
      <br />
      <User />
      {/* <Student /> */}
    </>
  );
}

export default App;
