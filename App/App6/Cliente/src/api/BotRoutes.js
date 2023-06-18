import { api_ip } from "../../Config";
const API = api_ip + '/bots'; // Actualiza la ruta base para los bots

export const deleteBot = async (botId) => {
  await fetch(`${API}/${botId}`, {
    method: "DELETE",
  });
};

export const getBots = async (userId) => {
  const res = await fetch(`${API}/${userId}`, {
    method: "GET",
  });

  return await res.json();
};

export const saveBot = async (newBot) => {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newBot),
  });
  return await res.json();
};

export const getBot = async (botId) => {
  const res = await fetch(`${API}/bot/${botId}`);
  const bot = await res.json();
  return bot;
};

export const updateBot = async (botId, updatedBot) => {
  const res = await fetch(`${API}/${botId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedBot),
  });
  return res;
};
