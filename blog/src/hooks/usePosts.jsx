import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  getPosts,
  createPost,
  getPostById,
  deletePost,
  updatePost,
} from "../apis/postApi";

// GET posts
export const useGetPosts = (appliedFilters) => {
  return useQuery({
    queryKey: ["posts", appliedFilters],
    queryFn: () => getPosts(appliedFilters),
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
    onSuccess: (res) => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};

//UPDATE post
export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updatePost,
    onSuccess: (res) => {
      // refresh list
      queryClient.invalidateQueries(["posts"]);
    },
  });
};

//Delete post
export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deletePost,

    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });
};
