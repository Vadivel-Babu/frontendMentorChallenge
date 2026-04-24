import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createComment } from "../apis/commentApi";

// // GET posts
// export const usePosts = () => {
//   return useQuery({
//     queryKey: ["posts"],
//     queryFn: getP,
//   });
// };

// CREATE post
export const useCreateComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createComment,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
