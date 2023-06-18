import { api_ip } from "../../Config";
const API = api_ip + '/plantillas'; // Actualiza la ruta base para las plantillas

export const deletePlantilla = async (plantillaId) => {
  await fetch(`${API}/${plantillaId}`, {
    method: "DELETE",
  });
};

export const getPlantillasByBot = async (botId) => {
  const res = await fetch(`${API}/bot/${botId}`, {
    method: "GET",
  });

  return await res.json();
};

export const savePlantilla = async (newPlantilla) => {
  const res = await fetch(`${API}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPlantilla),
  });
  return await res.json();
};

export const getPlantilla = async (plantillaId) => {
  const res = await fetch(`${API}/${plantillaId}`);
  const plantilla = await res.json();
  return plantilla;
};

export const updatePlantilla = async (plantillaId, updatedPlantilla) => {
  const res = await fetch(`${API}/${plantillaId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedPlantilla),
  });
  return res;
};
