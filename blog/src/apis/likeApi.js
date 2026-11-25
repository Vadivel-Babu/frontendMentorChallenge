import api from "./axios";

// CREATE post
export const likePost = async (data) => {
  const res = await api.post(`/like/${data.postId}`);
  return res.data;
};
