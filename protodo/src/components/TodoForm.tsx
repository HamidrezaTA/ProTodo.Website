import React, { useState } from "react";
import { TodoItem } from "../types/TodoItem";

interface TodoFormProps {
  mode: "create" | "edit";
  initialData?: TodoItem;
  onSubmit: (data: Partial<TodoItem>) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ mode, initialData, onSubmit }) => {
  const [formData, setFormData] = useState<Partial<TodoItem>>(
    initialData || {
      title: "",
      content: "",
      dueDate: "",
      state: 0,
    }
  );

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  // Ensure the component returns JSX
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          name="content"
          value={formData.content || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={formData.dueDate || ""}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>State:</label>
        <select
          name="state"
          value={formData.state || 0}
          onChange={handleChange}
        >
          <option value="0">Initiated</option>
          <option value="1">Expired</option>
          <option value="2">Done</option>
        </select>
      </div>
      <button type="submit">
        {mode === "create" ? "Create" : "Save Changes"}
      </button>
    </form>
  );
};

export default TodoForm;
