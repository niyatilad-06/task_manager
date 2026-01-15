import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/todos";

// GET tasks
export const fetchTasks = async () => {
  try {
    const response = await axios.get(API_URL + "?_limit=5");
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch tasks");
  }
};

// ADD task
export const addTaskApi = async (task) => {
  try {
    const response = await axios.post(API_URL, {
      title: task,
      completed: false,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to add task");
  }
};

// DELETE task
export const deleteTaskApi = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    return id;
  } catch (error) {
    throw new Error("Failed to delete task");
  }
};
