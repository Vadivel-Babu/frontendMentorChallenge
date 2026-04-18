import {
  ActionIcon,
  Avatar,
  Paper,
  Image,
  Text,
  Badge,
  Button,
  CopyButton,
  Breadcrumbs,
  Box,
  Input,
  Loader,
} from "@mantine/core";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { NavLink, useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import { useState } from "react";
import { useGetPostById } from "../hooks/usePosts";

const items = [
  { title: "Home", href: "/" },
  { title: "Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const PostPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { data, isLoading } = useGetPostById(id);
  console.log(data?.post, id, data?.comments);

  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-125">
          <Loader color="indigo" size="xl" mt={50} />
        </div>
      ) : (
        <Box maw={900} mx={"auto"}>
          <div className="flex justify-between sticky top-0 bg-white p-2.5">
            <div className="flex items-center space-x-1">
              <Avatar color="cyan" src={data?.post?.author_img}>
                {data?.post?.author_name[0]}
              </Avatar>
              <h1 className="font-semibold ">{data?.post?.author_name}</h1>
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
          <h1 className="text-center font-bold text-3xl">
            {data?.post?.title}
          </h1>
          <p className="text-center font-extrabold text-gray-400">
            Category: <Badge color="cyan">{data?.post?.category}</Badge>
          </p>
          <div className="my-1 p-1">
            <Image
              h={300}
              radius="md"
              src={data?.post?.img}
              fallbackSrc="https://placehold.co/600x400?text=Placeholder"
            />
            <Text>{data?.post?.content}</Text>
          </div>
          <Box mt={10}>
            <div className="flex justify-between items-center mb-1">
              <h1 className="font-bold">
                Comments: <Badge>{data?.post?.total_comments}</Badge>
              </h1>
              <Button onClick={() => setIsOpen(true)}>Add comment</Button>
            </div>
            {isOpen && (
              <div className="flex space-x-1 mb-1">
                <Input placeholder="type comment" />
                <Button color="red" onClick={() => setIsOpen(false)}>
                  cancel
                </Button>
                <Button>submit</Button>
              </div>
            )}
            <CommentCard />
          </Box>
        </Box>
      )}
    </div>
  );
};

export default PostPage;
