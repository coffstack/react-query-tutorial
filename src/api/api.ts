import axios from "axios";
import { User } from "../models/UserModel";
const URL = "https://627fe5d97532b4920f69de5e.mockapi.io/";

async function getUsers(): Promise<User[]> {
  const response = await axios.get<User[]>(`${URL}users`);

  return response.data;
}
async function updateUserName(userId: string, name: string): Promise<User> {
  const response = await axios.put<User>(`${URL}users/${userId}`, { name });

  return response.data;
}

export const api = {
  getUsers,
  updateUserName,
};
