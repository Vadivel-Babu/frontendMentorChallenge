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

const CommentCard = () => {
  return (
    <Paper shadow="xs" radius="md" component="div" className="p-2">
      <div className="flex justify-between">
        <div className="flex items-center space-x-1">
          <Avatar
            color="cyan"
            src={
              "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
            }
          >
            jk
          </Avatar>
          <h1 className="font-semibold ">name</h1>
        </div>
        <div className="flex items-center space-x-1">
          <ActionIcon color="red">
            <MdOutlineDeleteOutline />
          </ActionIcon>
          <ActionIcon color="gray">
            <MdOutlineModeEdit />
          </ActionIcon>
        </div>
      </div>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus
        praesentium aliquam vel illo quos, adipisci recusandae suscipit,
        doloremque esse quidem fugit velit consequatur facere culpa unde neque.
        Distinctio, vero. Quidem veniam officia quod totam fugiat vel sapiente,
        odit provident asperiores quaerat consequuntur repudiandae sed nesciunt
        error facere velit voluptates mollitia obcaecati placeat? Illo
        reprehenderit distinctio dignissimos molestiae iure velit?
      </p>
    </Paper>
  );
};

export default CommentCard;
