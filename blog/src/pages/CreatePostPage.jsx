import {
  Breadcrumbs,
  Anchor,
  Input,
  Button,
  Select,
  Textarea,
  FileButton,
  Image,
  Box,
} from "@mantine/core";
import { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useCreatePost } from "../hooks/usePosts";
import toast from "react-hot-toast";

const items = [
  { title: "Home", href: "/" },
  { title: "Create Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const CreatePostPage = () => {
  const [value, setValue] = useState("php");
  const [preview, setPreview] = useState(null);
  const [data, setData] = useState({
    title: "",
    category: "",
    content: "",
    img: null,
  });
  const { user } = useContext(AuthContext);
  const { mutate, isPending } = useCreatePost();

  function handleCreatePost() {
    if (!data.title || !data.content || !data.category) {
      toast.error("All fields required");
      return;
    }

    const formData = new FormData();

    formData.append("title", data.title);
    formData.append("content", data.content);
    formData.append("category", data.category);
    formData.append("userId", user.id);

    if (data.img) {
      formData.append("img", data.img);
    }
    console.log([...formData.entries()]);

    mutate(formData, {
      onSuccess: (res) => {
        toast.success(res.message || "posted successfully");
        navigate(`/`);
      },
      onError: (err) => {
        toast.error(err.response?.data?.message || "cannot post failed");
      },
    });
  }
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <h1 className="font-bold text-2xl text-center my-3">Create Post</h1>
      <Box maw={700} mx={"auto"}>
        <Input
          className="caret-blue-500"
          label="Title"
          name="title"
          placeholder="title"
          value={data.title}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />
        <Select
          my={"sm"}
          onChange={(e) => setData({ ...data, category: e })}
          label="Your favorite language"
          placeholder="Pick value"
          value={data.category}
          data={["javascript", "php", "python"]}
        />
        <Textarea
          label="content"
          placeholder="enter your thoughts"
          autosize
          minRows={3}
          maxRows={6}
          name="content"
          value={data.content}
          onChange={(e) =>
            setData({ ...data, [e.target.name]: e.target.value })
          }
        />

        {preview ? (
          <>
            <Image src={preview} alt="Preview" w={200} my={5} radius="md" />
            <Button
              color="red"
              mb={"xs"}
              onClick={() => {
                setData({ ...data, img: null });
                setPreview(null);
              }}
            >
              Delete
            </Button>
          </>
        ) : (
          <FileButton
            my={8}
            accept="image/png,image/jpeg"
            onChange={(selectedFile) => {
              setData({ ...data, img: selectedFile });

              if (selectedFile) {
                setPreview(URL.createObjectURL(selectedFile));
              }
            }}
          >
            {(props) => (
              <Button color="black" {...props}>
                Upload image
              </Button>
            )}
          </FileButton>
        )}
        <br />
        <Button loading={isPending} onClick={handleCreatePost}>
          Publish
        </Button>
        {/* <Button ml={3}>Save as Draft</Button> */}
      </Box>
    </div>
  );
};

export default CreatePostPage;
