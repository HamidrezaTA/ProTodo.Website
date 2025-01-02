import React from "react";
import TodoItemForm from "../components/TodoForm";
import { useNavigate } from "react-router-dom";
import { createTodo } from "../services/TodoService";
import { TodoItem } from "../types/TodoItem";

const TodoItemCreatePage: React.FC = () => {
  const navigate = useNavigate();

  const handleCreate = async (data: Partial<TodoItem>) => {
    try {
      // Ensure all required fields are provided
      const validatedData: Omit<TodoItem, "id"> = {
        title: data.title || "",
        content: data.content || "",
        dueDate: data.dueDate || "",
        state: data.state || 0,
        isDeleted: data.isDeleted ?? false,
      };

      await createTodo(validatedData);
      navigate("/todo-items-list"); // Navigate back to the TodoListPage
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div>
      <h1>Create Todo Item</h1>
      <TodoItemForm mode="create" onSubmit={handleCreate} />
    </div>
  );
};

export default TodoItemCreatePage;
