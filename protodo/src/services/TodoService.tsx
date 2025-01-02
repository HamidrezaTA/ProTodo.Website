import { TodoItem } from "../types/TodoItem";

import ApiClient from "./ApiClient";

export const fetchTodos = async (): Promise<TodoItem[]> => {
  try {
    const response = await ApiClient.get<TodoItem[]>("/TodoItem");
    return response.data; // Axios automatically parses JSON
  } catch (error: any) {
    if (error.response) {
      // Server responded with a status outside the 2xx range
      throw new Error(error.response.data.message || "Failed to fetch todos");
    } else if (error.request) {
      // No response was received
      throw new Error("No response from server");
    } else {
      // Other errors
      throw new Error(error.message);
    }
  }
};

export const createTodo = async (
  newTodo: Omit<TodoItem, "id">
): Promise<TodoItem> => {
  try {
    const response = await ApiClient.post<TodoItem>("/TodoItem", newTodo);
    return response.data;
  } catch (error: any) {
    if (error.response) {
      throw new Error(error.response.data.message || "Failed to create todo");
    } else if (error.request) {
      throw new Error("No response from server");
    } else {
      throw new Error(error.message);
    }
  }
};

export const getTodoById = async (id: string): Promise<TodoItem> => {
  const response = await ApiClient.get<TodoItem>(`/TodoItem/${id}`);
  return response.data;
};

export const updateTodo = async (id: string, todo: Partial<TodoItem>) => {
  await ApiClient.put(`/TodoItem/${id}`, todo);
};
