import api from "./axios";

// GET posts
export const getPosts = async (appliedFilters) => {
  const res = await api.get("/posts", {
    params: {
      search: appliedFilters.search,
      category: appliedFilters.category,
    },
  });
  return res.data;
};

// GET posts by ID
export const getPostById = async (id) => {
  const res = await api.get(`/posts/${id}`);
  return res.data;
};

// CREATE post
export const createPost = async (formData) => {
  const res = await api.post("/posts", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// UPDATE Post
export const updatePost = async ({ id, formData }) => {
  const res = await api.post(`/posts/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};

// DELETE post
export const deletePost = async (id) => {
  const res = await api.delete(`/posts/${id}`);
  return res.data;
};
