import {
  Breadcrumbs,
  Anchor,
  Input,
  Button,
  Select,
  Textarea,
  FileButton,
  Loader,
  Box,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useGetPostById } from "../hooks/usePosts";

const items = [
  { title: "Home", href: "/" },
  { title: "Edit Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const EditPostPage = () => {
  const [postData, setPostData] = useState({
    title: "",
    img: "",
    content: "",
    category: "",
  });
  const { id } = useParams();
  const { data, isLoading } = useGetPostById(id);
  console.log(data);

  useEffect(() => {
    setPostData({
      title: data?.post?.title,
      content: data?.post?.content,
      img: data?.post?.img,
      category: data?.post?.category,
    });
  }, [isLoading]);

  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-125">
          <Loader color="indigo" size="xl" mt={50} />
        </div>
      ) : (
        <>
          <h1 className="font-bold text-2xl text-center my-3">Edit Post</h1>
          <Box maw={700} mx={"auto"}>
            <Input
              className="caret-blue-500"
              label="Title"
              placeholder="title"
              value={postData.title}
            />
            <Select
              my={"sm"}
              label="Your favorite library"
              placeholder="Pick value"
              value={postData.category}
              //onChange={(e) => setValue(e)}
              data={["javascript", "php", "python"]}
            />
            <Textarea
              className="caret-blue-500"
              label="content"
              placeholder="enter your thoughts"
              value={postData.content}
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
        </>
      )}
    </div>
  );
};

export default EditPostPage;
