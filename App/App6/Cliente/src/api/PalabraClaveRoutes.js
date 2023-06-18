import { api_ip } from "../../Config";
const API = api_ip + '/palabras_clave'; // Actualiza la ruta base para las palabras clave

export const deletePalabraClave = async (palabraClaveId) => {
  await fetch(`${API}/${palabraClaveId}`, {
    method: "DELETE",
  });
};

export const getPalabrasClaveByBot = async (botId) => {
  const res = await fetch(`${API}/bot/${botId}`, {
    method: "GET",
  });

  return await res.json();
};

export const savePalabraClave = async (newPalabraClave) => {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPalabraClave),
  });
  return await res.json();
};

export const getPalabraClave = async (palabraClaveId) => {
  const res = await fetch(`${API}/${palabraClaveId}`);
  const palabraClave = await res.json();
  return palabraClave;
};

export const updatePalabraClave = async (palabraClaveId, updatedPalabraClave) => {
  const res = await fetch(`${API}/${palabraClaveId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPalabraClave),
  });
  return res;
};
