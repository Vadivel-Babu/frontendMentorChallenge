import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../api/userApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
