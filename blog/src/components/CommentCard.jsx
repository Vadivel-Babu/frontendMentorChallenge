import {
  ActionIcon,
  Avatar,
  Paper,
  Image,
  Text,
  Badge,
  Button,
  CopyButton,
  Textarea,
} from "@mantine/core";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import React, { useState } from "react";
import { useDeleteComment, useUpdateComment } from "../hooks/useComments";
import { FaCheckCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import toast from "react-hot-toast";

const CommentCard = ({ comment, user }) => {
  const [newComment, setNewComment] = useState(null);
  const { mutate } = useUpdateComment();
  const { mutate: deleteMutate } = useDeleteComment();

  function handleUpdateComment() {
    const data = {
      content: newComment.content,
      userId: user.id,
      postId: comment.postId,
    };

    const toastId = toast.loading("Commenting...");
    mutate(
      { id: newComment.id, data },
      {
        onSuccess: (res) => {
          toast.success(res.message || "commented successfully", {
            id: toastId,
          });
          setNewComment(null);
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "cannot commented", {
            id: toastId,
          });
        },
      },
    );
  }
  return (
    <Paper key={comment?.id} withBorder radius="md" component="div" p={10}>
      <div className="flex justify-between">
        <div className="flex items-center space-x-1">
          <Avatar color="cyan" src={comment?.author_img}>
            {comment?.author_name[0]}
          </Avatar>
          <h1 className="font-semibold ">{comment?.author_name}</h1>
        </div>
        <div
          className={`flex items-center space-x-1 ${comment.userId === user.id ? "visible" : "invisible"}`}
        >
          {newComment === null ? (
            <>
              <ActionIcon color="red">
                <MdOutlineDeleteOutline />
              </ActionIcon>
              <ActionIcon
                color="gray"
                onClick={() =>
                  setNewComment({ id: comment.id, content: comment.content })
                }
              >
                <MdOutlineModeEdit />
              </ActionIcon>
            </>
          ) : (
            <>
              <ActionIcon color="red" onClick={() => setNewComment(null)}>
                <RxCross2 />
              </ActionIcon>
              <ActionIcon color="black" onClick={handleUpdateComment}>
                <FaCheckCircle />
              </ActionIcon>
            </>
          )}
        </div>
      </div>
      {newComment === null ? (
        <p className="mt-2">{comment?.content}</p>
      ) : (
        <Textarea
          placeholder="enter your thoughts"
          autosize
          minRows={2}
          maxRows={3}
          mt={2}
          name="content"
          value={newComment.content}
          onChange={(e) =>
            setNewComment({ ...newComment, [e.target.name]: e.target.value })
          }
        />
      )}
    </Paper>
  );
};

export default CommentCard;
