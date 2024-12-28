import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import TodoDetailPage from "../pages/TodoDetailPage";
import TodoCreatePage from "../pages/TodoCreatePage";
import TodoListPage from "../pages/TodoListPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo-item/:id" element={<TodoDetailPage />} />
        <Route path="/todo-item" element={<TodoCreatePage />} />
        <Route path="/todo-items-list" element={<TodoListPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
