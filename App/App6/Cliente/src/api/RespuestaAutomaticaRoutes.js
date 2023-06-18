import { api_ip } from "../../Config";
const API = api_ip + '/respuestas_automaticas'; // Actualiza la ruta base para las respuestas automáticas

export const deleteRespuestaAutomatica = async (respuestaId) => {
  await fetch(`${API}/${respuestaId}`, {
    method: "DELETE",
  });
};

export const getRespuestasAutomaticasByBot = async (botId) => {
  const res = await fetch(`${API}/bot/${botId}`, {
    method: "GET",
  });

  return await res.json();
};

export const saveRespuestaAutomatica = async (newRespuestaAutomatica) => {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newRespuestaAutomatica),
  });
  return await res.json();
};

export const getRespuestaAutomatica = async (respuestaId) => {
  const res = await fetch(`${API}/${respuestaId}`);
  const respuestaAutomatica = await res.json();
  return respuestaAutomatica;
};

export const updateRespuestaAutomatica = async (respuestaId, updatedRespuestaAutomatica) => {
  const res = await fetch(`${API}/${respuestaId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedRespuestaAutomatica),
  });
  return res;
};
