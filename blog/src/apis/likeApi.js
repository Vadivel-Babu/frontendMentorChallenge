import api from "./axios";

// GET posts
export const getPosts = async () => {
  const res = await api.get("/posts.php");
  return res.data;
};

// CREATE post
export const createPost = async (data) => {
  const res = await api.post("/posts.php", data);
  return res.data;
};
