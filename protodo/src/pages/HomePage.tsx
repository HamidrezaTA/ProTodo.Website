import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div>
        <h1>Welcome to the Todo App</h1>
        <p>
          <Link to="/todo-items-list">View Todo List</Link>
        </p>
        <p>
          <Link to="/todo-item">Create Todo Item</Link>
        </p>
      </div>
    </>
  );
};

export default HomePage;
