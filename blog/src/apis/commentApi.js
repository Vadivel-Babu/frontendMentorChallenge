import api from "./axios";

// CREATE post
export const createComment = async (data) => {
  const res = await api.post("/comments", data);
  return res.data;
};
