import api from "./axios";

// CREATE post
export const createComment = async (data) => {
  const res = await api.post("/comments", data);
  return res.data;
};

export const updateComment = async ({ id, data }) => {
  const res = await api.put(`/comments/${id}`, data);
  return res.data;
};

export const deleteComment = async (id) => {
  const res = await api.delete(`/comments/${id}`);
  return res.data;
};
