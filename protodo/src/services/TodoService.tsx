import { TodoItem } from "../types/TodoItem";

const API_BASE_URL = "http://localhost:5291"; // Replace with your actual API URL

export const getAllTodoItems = async (): Promise<TodoItem[]> => {
  const response = await fetch(`${API_BASE_URL}/TodoItem`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  return response.json();
};
