// src/services/api.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5001/api', // Update to match your new backend port
  withCredentials: true,
});

export default api;