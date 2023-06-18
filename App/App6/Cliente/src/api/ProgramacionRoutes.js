import { api_ip } from "../../Config";
const API = api_ip + '/programaciones'; // Actualiza la ruta base para las programaciones

export const deleteProgramacion = async (programacionId) => {
  await fetch(`${API}/${programacionId}`, {
    method: "DELETE",
  });
};

export const getProgramacionesByBot = async (botId) => {
  const res = await fetch(`${API}/bot/${botId}`, {
    method: "GET",
  });

  return await res.json();
};

export const saveProgramacion = async (newProgramacion) => {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProgramacion),
  });
  return await res.json();
};

export const getProgramacion = async (programacionId) => {
  const res = await fetch(`${API}/${programacionId}`);
  const programacion = await res.json();
  return programacion;
};

export const updateProgramacion = async (programacionId, updatedProgramacion) => {
  const res = await fetch(`${API}/${programacionId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProgramacion),
  });
  return res;
};
