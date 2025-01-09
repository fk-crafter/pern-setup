import axios from "axios";
import { User } from "@/types/index";

const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export const fetchUsers = async (): Promise<User[]> => {
  const response = await axios.get(`${apiUrl}/users`);
  return response.data;
};

export const createUser = async (user: Omit<User, "id">): Promise<User> => {
  const response = await axios.post(`${apiUrl}/users`, user);
  return response.data;
};

export const updateUser = async (
  id: number,
  user: Omit<User, "id">
): Promise<void> => {
  await axios.put(`${apiUrl}/users/${id}`, user);
};

export const deleteUser = async (id: number): Promise<void> => {
  await axios.delete(`${apiUrl}/users/${id}`);
};
