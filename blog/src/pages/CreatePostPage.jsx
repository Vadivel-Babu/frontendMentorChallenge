import {
  Breadcrumbs,
  Anchor,
  Input,
  Button,
  Select,
  Textarea,
  FileButton,
  Box,
} from "@mantine/core";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const items = [
  { title: "Home", href: "/" },
  { title: "Create Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const CreatePostPage = () => {
  const [value, setValue] = useState("React");
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <h1 className="font-bold text-2xl text-center my-3">Create Post</h1>
      <Box maw={700} mx={"auto"}>
        <Input className="caret-blue-500" label="Title" placeholder="title" />
        <Select
          my={"sm"}
          label="Your favorite library"
          placeholder="Pick value"
          value={value}
          onChange={(e) => setValue(e)}
          data={["javascript", "php", "python"]}
        />
        <Textarea
          label="content"
          placeholder="enter your thoughts"
          autosize
          minRows={3}
          maxRows={6}
        />

        <FileButton my={8} accept="image/png,image/jpeg">
          {(props) => (
            <Button color="black" {...props}>
              Upload image
            </Button>
          )}
        </FileButton>
        <br />
        <Button>Publish</Button>
        {/* <Button ml={3}>Save as Draft</Button> */}
      </Box>
    </div>
  );
};

export default CreatePostPage;
