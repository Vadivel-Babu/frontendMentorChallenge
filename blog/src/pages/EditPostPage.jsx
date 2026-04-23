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
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useGetPostById, useUpdatePost } from "../hooks/usePosts";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const items = [
  { title: "Home", href: "/" },
  { title: "Edit Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const EditPostPage = () => {
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    title: "",
    img: null,
    content: "",
    category: "",
  });
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const { data, isLoading } = useGetPostById(id);
  const { mutate, isPending } = useUpdatePost();

  useEffect(() => {
    setPostData({
      title: data?.post?.title,
      content: data?.post?.content,
      img: data?.post?.img,
      category: data?.post?.category,
    });
  }, [isLoading]);

  function handleUpdate() {
    if (!postData.title || !postData.content || !postData.category) {
      toast.error("All fields required");
      return;
    }

    const formData = new FormData();

    formData.append("title", postData.title);
    formData.append("content", postData.content);
    formData.append("category", postData.category);
    formData.append("userId", user.id);

    if (postData.img) {
      formData.append("img", postData.img);
    }

    mutate(
      { id, formData },
      {
        onSuccess: (res) => {
          // if (!res.status) {
          //   toast.error(res.message);
          //   return;
          // }

          toast.success(res.message || "Updated successfully");
          navigate(`/post/${id}`);
        },
        onError: (err) => {
          toast.error(err.response?.data?.message || "Update failed");
        },
      },
    );
  }

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
              name="title"
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, [e.target.name]: e.target.value })
              }
            />
            <Select
              my={"sm"}
              label="Your favorite library"
              placeholder="Pick value"
              name="category"
              value={postData.category}
              onChange={(e) => setPostData({ ...postData, category: e })}
              //onChange={(e) => setValue(e)}
              data={["javascript", "php", "python"]}
            />
            <Textarea
              className="caret-blue-500"
              label="content"
              placeholder="enter your thoughts"
              name="content"
              value={postData.content}
              onChange={(e) =>
                setPostData({ ...postData, [e.target.name]: e.target.value })
              }
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
            <Button onClick={handleUpdate} loading={isPending}>
              Update
            </Button>
            {/* <Button ml={3}>Save as Draft</Button> */}
          </Box>
        </>
      )}
    </div>
  );
};

export default EditPostPage;
