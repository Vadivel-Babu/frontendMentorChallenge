import React from "react";
import { Badge, Paper, Text, Title } from "@mantine/core";
import { NavLink } from "react-router-dom";

const TopPostCard = () => {
  return (
    <Paper shadow="xs" radius="md" p={"md"} component="div" mah={"max-content"}>
      <Title size={25}>Most liked post</Title>
      <p className="my-1">
        category:
        <Badge color="cyan" ml={3}>
          java
        </Badge>{" "}
      </p>
      <p>Author:</p>
      <NavLink
        to={"/post"}
        className={"text-blue-600 underline hover:text-blue-200 my-1"}
      >
        View Post
      </NavLink>
    </Paper>
  );
};

export default TopPostCard;
