import { Avatar, Badge, Paper } from "@mantine/core";
import { Link } from "react-router-dom";

const ProfileCard = () => {
  return (
    <Paper
      shadow="sm"
      radius="md"
      component="div"
      className="p-2 w-50 max-h-max"
    >
      <Avatar
        color="cyan"
        radius="xl"
        size={"xl"}
        className="my-0 mx-auto"
        src={
          "https://img.freepik.com/free-photo/woman-beach-with-her-baby-enjoying-sunset_52683-144131.jpg?size=626&ext=jpg"
        }
      >
        MK
      </Avatar>
      <h1 className="text-center capitalize text-2xl font-bold mt-1">Name</h1>
      <h1 className="text-center capitalize text-lg my-1">jhon@mail.com</h1>
      <p className="text-center">
        No.of.post: <Badge>0</Badge>
      </p>
      <p className="text-center mt-1">
        Status: <Badge color="green">Active</Badge>
      </p>
      <Link
        to={"/setting"}
        className="text-center block mt-3 text-blue-600 underline hover:text-blue-400 text-[12px] font-bold"
      >
        Edit Profile
      </Link>
    </Paper>
  );
};

export default ProfileCard;
