import { api_ip } from "../../Config";
const API = api_ip + '/clientes'; // Actualiza la ruta base para los clientes

export const deleteCliente = async (clienteId) => {
  await fetch(`${API}/${clienteId}`, {
    method: "DELETE",
  });
};

export const getClientesByUser = async (userId) => {
  const res = await fetch(`${API}/user/${userId}`, {
    method: "GET",
  });

  return await res.json();
};

export const saveCliente = async (newCliente) => {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newCliente),
  });
  return await res.json();
};

export const getCliente = async (clienteId) => {
  const res = await fetch(`${API}/${clienteId}`);
  const cliente = await res.json();
  return cliente;
};

export const updateCliente = async (clienteId, updatedCliente) => {
  const res = await fetch(`${API}/${clienteId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedCliente),
  });
  return res;
};
