import {
  ActionIcon,
  Avatar,
  Paper,
  Image,
  Text,
  Badge,
  Button,
  CopyButton,
  Input,
} from "@mantine/core";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { BiSolidLike, BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiShareNetworkFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const [postId, setPostId] = useState(0);
  const [isCommentOpen, setIsCommentOpen] = useState(false);
  const [comment, setComment] = useState("");

  function handleCloseCommentBox() {
    setIsCommentOpen(false);
    setPostId(0);
    setComment("");
  }
  return (
    <Paper
      component="div"
      shadow="md"
      radius="md"
      className="p-2 max-w-175 md:w-full"
      id={post.id}
    >
      <div className="flex justify-between">
        <div className="flex items-center space-x-1">
          <Avatar color="cyan" src={post?.author_img}>
            {post?.author_name[0]}
          </Avatar>
          <h1 className="font-semibold "> {post?.author_name}</h1>
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
      <div className="my-1">
        <Image
          h={200}
          radius="md"
          src={post.img}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
        <h1 className="font-bold my-0.5 text-2xl">{post?.title}</h1>
        <Text truncate="end">{post?.content}</Text>
      </div>
      {isCommentOpen && postId === post.id && (
        <div className="my-1">
          <h1>Comment:</h1>
          <Input
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="your comment..."
          />
          <Button color="black">submit</Button>
          <Button color="red" onClick={handleCloseCommentBox}>
            close
          </Button>
        </div>
      )}
      <div className="flex justify-between">
        <Badge>like {post?.total_likes}</Badge>
        <Badge>comment {post?.total_comments}</Badge>
      </div>
      <div className="flex justify-evenly border-t my-3 pt-3">
        <Button
          leftSection={<BiSolidLike />}
          variant={post?.is_Liked ? "filled" : "transparent"}
          color={post?.is_Liked ? "blue" : "black"}
        >
          {!post?.is_Liked ? "like" : "liked"}
        </Button>
        <Button
          leftSection={<BiCommentDetail />}
          color="black"
          variant="transparent"
          onClick={() => {
            if (!isCommentOpen) {
              setIsCommentOpen(true);
              setPostId(post?.id);
            } else {
              handleCloseCommentBox();
            }
          }}
        >
          comment
        </Button>
        <CopyButton value="https://mantine.dev">
          {({ copied, copy }) => (
            <Button
              leftSection={<PiShareNetworkFill />}
              variant="transparent"
              onClick={copy}
              color="black"
            >
              {copied ? "Copied" : "share"}
            </Button>
          )}
        </CopyButton>
        <Button
          onClick={() => navigate(`/post/${post.id}`)}
          color="black"
          rightSection={<FaArrowRightLong />}
          variant="transparent"
        >
          View
        </Button>
      </div>
    </Paper>
  );
};

export default PostCard;
