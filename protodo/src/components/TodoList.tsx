import React, { useEffect, useState } from "react";
import { TodoItem } from "../types/TodoItem";
import { getAllTodoItems } from "../services/TodoService";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState<TodoItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const data = await getAllTodoItems();
        setTodoItems(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    getTodos();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div>
      <h1>Todo List</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Content</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Deleted</th>
          </tr>
        </thead>
        <tbody>
          {todoItems.map((todoItem, index) => (
            <tr key={index}>
              <td>{index}</td>
              <td>{todoItem.title}</td>
              <td>{todoItem.content}</td>
              <td>{new Date(todoItem.dueDate).toLocaleDateString()}</td>
              <td>{todoItem.state}</td>
              <td>{todoItem.isDeleted ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoList;
