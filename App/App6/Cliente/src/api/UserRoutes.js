//import { ip } from './Config';
//const API = 'http://192.168.10.22:3000/tasks';
//const API = 'http://' + ip + ':3000/tasks'
import { api_ip } from "../../Config";
const API = api_ip + '/users'; // Actualiza la ruta base para los usuarios

export const deleteUser = async (userId) => {
  await fetch(`${API}/${userId}`, {
    method: "DELETE",
  });
};

export const getUsers = async () => {
  const res = await fetch(API, {
    method: "GET",
  });

  return await res.json();
};

export const saveUser = async (newUser) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  });
  return await res.json();
};

export const getUser = async (userId) => {
  const res = await fetch(`${API}/${userId}`);
  const user = await res.json();
  return user;
};

export const updateUser = async (userId, updatedUser) => {
  const res = await fetch(`${API}/${userId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedUser),
  });
  return res;
};

export const getUserByEmail = async (email) => {
  const res = await fetch(`${API}/email/${email}`);
  const user = await res.json();
  return user;
};

