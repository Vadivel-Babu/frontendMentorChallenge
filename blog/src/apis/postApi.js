import api from "./axios";

// GET posts
export const getPosts = async () => {
  const res = await api.get("/posts");
  return res.data;
};

// GET posts by ID
export const getPostById = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

// CREATE post
export const createPost = async (data) => {
  const res = await api.post("/posts", data);
  return res.data;
};

// UPDATE Post
export const updatePost = async (data, id) => {
  const res = await api.post(`/posts/${id}`, data);
  return res.data;
};

// DELETE post
export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
};
