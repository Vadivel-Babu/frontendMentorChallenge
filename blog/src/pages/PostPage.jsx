import {
  ActionIcon,
  Avatar,
  Paper,
  Image,
  Text,
  Badge,
  Button,
  CopyButton,
  Breadcrumbs,
  Box,
  Input,
  Loader,
} from "@mantine/core";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import { useContext, useState } from "react";
import { useDeletePost, useGetPostById } from "../hooks/usePosts";
import { AuthContext } from "../context/AuthContext";
import { useCreateComment } from "../hooks/useComments";
import toast from "react-hot-toast";

const items = [
  { title: "Home", href: "/" },
  { title: "Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const PostPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const [comment, setComment] = useState("");
  const { mutate } = useCreateComment();
  const { mutate: deleteMutate } = useDeletePost();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading } = useGetPostById(id);

  function handleComment() {
    if (!comment.trim().length) {
      toast.error("filed is empty");
      return;
    }
    const toastId = toast.loading("Commenting...");
    const data = { content: comment, userId: user.id, postId: id };
    mutate(data, {
      onSuccess: (res) => {
        toast.success(res.message || "commented successfully", {
          id: toastId,
        });
        setComment("");
        setIsOpen(false);
      },
      onError: (err) => {
        toast.error(err.response?.data?.message || "cannot commented", {
          id: toastId,
        });
      },
    });
  }

  const handleDelete = () => {
    const toastId = toast.loading("Deleting post...");
    mutate(id, {
      onSuccess: (res) => {
        toast.success(res.message || "Post Deleted successfully", {
          id: toastId,
        });
        navigate("/");
      },
      onError: (err) => {
        toast.error(err.response?.data?.message || "Delete failed", {
          id: toastId,
        });
      },
    });
  };

  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-125">
          <Loader color="indigo" size="xl" mt={50} />
        </div>
      ) : (
        <Box maw={900} mx={"auto"}>
          <div className="flex justify-between sticky top-0 bg-white p-2.5">
            <div className="flex items-center space-x-1">
              <Avatar color="cyan" src={data?.post?.author_img}>
                {data?.post?.author_name[0]}
              </Avatar>
              <h1 className="font-semibold ">{data?.post?.author_name}</h1>
            </div>
            <div
              className={`flex items-center space-x-1 ${data?.post?.userId === user.id ? "visible" : "invisible"}`}
            >
              <ActionIcon
                color="red"
                variant="transparent"
                onClick={handleDelete}
              >
                <MdOutlineDeleteOutline />
              </ActionIcon>
              <ActionIcon
                onClick={() => navigate(`/edit/${data?.post?.id}`)}
                color="gray"
                variant="transparent"
              >
                <MdOutlineModeEdit />
              </ActionIcon>
            </div>
          </div>
          <h1 className="text-center font-bold text-3xl">
            {data?.post?.title}
          </h1>
          <div className="text-center font-extrabold text-gray-400">
            Category: <Badge color="cyan">{data?.post?.category}</Badge>
          </div>
          <div className="my-1 p-1">
            <Image
              h={300}
              radius="md"
              src={data?.post?.img}
              fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
            <Text>{data?.post?.content}</Text>
          </div>
          <Box mt={10}>
            <div className="flex justify-between items-center mb-1">
              <h1 className="font-bold">
                Comments: <Badge>{data?.post?.total_comments}</Badge>
              </h1>
              <Button onClick={() => setIsOpen(true)}>Add comment</Button>
            </div>
            {isOpen && (
              <div className="flex space-x-1 mb-1">
                <Input
                  placeholder="type comment"
                  onChange={(e) => setComment(e.target.value)}
                />
                <Button
                  color="red"
                  onClick={() => {
                    setIsOpen(false);
                    setComment("");
                  }}
                >
                  cancel
                </Button>
                <Button onClick={handleComment}>submit</Button>
              </div>
            )}
            {data?.comments?.length > 0 ? (
              <div className="flex-col space-y-1 max-h-70 overflow-y-scroll scrollbar-thin py-1">
                {data?.comments?.map((comment) => (
                  <CommentCard key={comment.id} comment={comment} user={user} />
                ))}{" "}
              </div>
            ) : (
              <p>No comments</p>
            )}
          </Box>
        </Box>
      )}
    </div>
  );
};

export default PostPage;
