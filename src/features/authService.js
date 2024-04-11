import axios from "axios";

const API_URL = "https://backend-pah0.onrender.com/api/user/";
// const base_url = "http://localhost:8000/";
const register = async (userData) => {
  /*  */
  console.log("user", userData);
  const response = await axios.post(API_URL, userData);
  console.log(response);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => localStorage.removeItem("user");
const authService = { register, logout, login };

export default authService;
