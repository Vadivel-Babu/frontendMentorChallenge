import { useMutation } from "@tanstack/react-query";
import { loginUser, signinUser } from "../apis/userApi";

export const useLogin = () => {
  return useMutation({
    mutationFn: loginUser,
  });
};

export const useSignin = () => {
  return useMutation({
    mutationFn: signinUser,
  });
};
