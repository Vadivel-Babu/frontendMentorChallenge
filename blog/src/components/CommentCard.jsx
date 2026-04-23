import {
  ActionIcon,
  Avatar,
  Paper,
  Image,
  Text,
  Badge,
  Button,
  CopyButton,
} from "@mantine/core";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import React from "react";

const CommentCard = ({ comment, user }) => {
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
          <ActionIcon color="red">
            <MdOutlineDeleteOutline />
          </ActionIcon>
          <ActionIcon color="gray">
            <MdOutlineModeEdit />
          </ActionIcon>
        </div>
      </div>
      <p className="mt-2">{comment?.content}</p>
    </Paper>
  );
};

export default CommentCard;
