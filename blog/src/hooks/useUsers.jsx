import { useMutation } from "@tanstack/react-query";
import { loginUser, signinUser, updateUser } from "../apis/userApi";

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

export const useUserUpdate = () => {
  return useMutation({
    mutationFn: updateUser,
  });
};
