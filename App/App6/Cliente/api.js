//import { ip } from './Config';
//const API = 'http://192.168.10.22:3000/tasks';
//const API = 'http://' + ip + ':3000/tasks'
const API = 'http://192.168.1.136:3000/articles';


export const deleteArticle = async (id) => {
  await fetch(`${API}/${id}`, {
    method: "DELETE",
  });
};

export const getArticles = async () => {
  const res = await fetch(API, {
    method: "GET",
  });

  return await res.json();
};

export const saveArticle = async (newArticle) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  });
  return await res.json();
};

export const getArticle = async (articleId) => {
  const res = await fetch(`${API}/${articleId}`);
  const article = await res.json();
  return { ...article, usuario_id: "usuario_prueba" }; // Asegúrate de incluir el usuario_id aquí
};

export const updateArticle = async (articleId, title, body) => {
  const res = await fetch(`${API}/${articleId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: title, body: body }),
  });
  return res;
};