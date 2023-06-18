import { api_ip } from "../../Config";
const API = api_ip + '/mensajes'; // Actualiza la ruta base para los mensajes

export const deleteMensaje = async (mensajeId) => {
  await fetch(`${API}/${mensajeId}`, {
    method: "DELETE",
  });
};

export const getMensajesByBot = async (botId) => {
  const res = await fetch(`${API}/bot/${botId}`, {
    method: "GET",
  });

  return await res.json();
};

export const saveMensaje = async (newMensaje) => {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMensaje),
  });
  return await res.json();
};

export const getMensaje = async (mensajeId) => {
  const res = await fetch(`${API}/${mensajeId}`);
  const mensaje = await res.json();
  return mensaje;
};

export const updateMensaje = async (mensajeId, updatedMensaje) => {
  const res = await fetch(`${API}/${mensajeId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedMensaje),
  });
  return res;
};
