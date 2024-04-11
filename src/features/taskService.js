import axios from "axios";

const API_URL = "https://backend-pah0.onrender.com/api/tasks/";
// const base_url = "http://localhost:8000/";
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, taskData, config);
  return response.data;
};
const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

const deleteTask = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + id, config);
  return response.data;
};
const taskService = { createTask, getTasks, deleteTask };

export default taskService;
