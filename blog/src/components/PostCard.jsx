import { ActionIcon, Avatar, Paper, Image } from "@mantine/core";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import React from "react";

const PostCard = () => {
  return (
    <Paper
      component="div"
      shadow="sm"
      radius="md"
      className="p-2 max-w-175 md:w-full"
    >
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
          <ActionIcon color="yellow">
            <MdOutlineModeEdit className="text-black" />
          </ActionIcon>
        </div>
      </div>
      <div className="mt-1">
        <Image
          h={200}
          radius="md"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        />
      </div>
    </Paper>
  );
};

export default PostCard;
