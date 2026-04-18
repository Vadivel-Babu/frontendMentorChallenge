import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getPosts, createPost, getPostById } from "../apis/postApi";

// GET posts
export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

//GET post by id
export const useGetPostById = (id) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPostById(id),
    enabled: !!id,
  });
};

// CREATE post
export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
