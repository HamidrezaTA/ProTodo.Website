import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TodoItemForm from "../components/TodoForm";
import { getTodoById, updateTodo } from "../services/TodoService";
import { TodoItem } from "../types/TodoItem";

const TodoDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [todo, setTodo] = useState<TodoItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        console.log("Id is " + id);
        const data = await getTodoById(id ?? "");
        setTodo(data);
      } catch (error) {
        console.error("Error fetching todo:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodo();
  }, [id]);

  const handleUpdate = async (data: Partial<TodoItem>) => {
    try {
      await updateTodo(id ?? "", data);
      navigate("/todo-items-list"); // Navigate back to the TodoListPage
    } catch (error) {
      console.error("Error updating todo:", error);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!todo) return <p>Todo not found</p>;

  return (
    <div>
      <h1>Edit Todo Item</h1>
      <TodoItemForm mode="edit" initialData={todo} onSubmit={handleUpdate} />
    </div>
  );
};

export default TodoDetailPage;
