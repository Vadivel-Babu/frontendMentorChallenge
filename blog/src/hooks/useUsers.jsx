import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../apis/userApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};
