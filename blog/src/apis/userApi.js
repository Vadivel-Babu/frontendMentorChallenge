import api from "./axios";

export const loginUser = async (data) => {
  const res = await api.post("/login.php", data);
  return res.data;
};
