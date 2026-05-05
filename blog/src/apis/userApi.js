import api from "./axios";

export const loginUser = async (data) => {
  const res = await api.post("/login", data);
  return res.data;
};

export const signinUser = async (data) => {
  const res = await api.post("/register", data);
  return res.data;
};

export const updateUser = async ({ id, formData }) => {
  const res = await api.post(`/user/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data;
};
