import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export const getUsers = (page: number, limit: number) => {
  return api.get(`/users?page=${page}&limit=${limit}`);
};

export const getUserById = (id: number) => {
  return api.get(`/user/${id}`);
};
