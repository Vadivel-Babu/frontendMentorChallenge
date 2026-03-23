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
import { BiSolidLike, BiCommentDetail } from "react-icons/bi";
import { FaArrowRightLong } from "react-icons/fa6";
import { PiShareNetworkFill } from "react-icons/pi";
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
          <ActionIcon color="gray">
            <MdOutlineModeEdit />
          </ActionIcon>
        </div>
      </div>
      <div className="my-1">
        <Image
          h={200}
          radius="md"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
        />
        <Text truncate="end">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
          libero, delectus quaerat eveniet odit velit explicabo voluptatum
          architecto quia, odio accusamus! Quia quisquam impedit inventore
          architecto repellendus culpa sit aliquam. Perferendis esse non
          delectus officia mollitia, eos sequi illum praesentium. Quo doloremque
          repellendus aliquam corrupti. Eaque, earum nostrum exercitationem quo
          quaerat nihil asperiores, doloribus recusandae, fugiat facilis
          voluptatum architecto dignissimos. Porro qui sapiente amet, tenetur
          soluta aspernatur quia fugit suscipit alias exercitationem ipsum
          optio? Rerum voluptatibus veniam asperiores, itaque facere quibusdam
          consectetur labore fuga laborum temporibus incidunt laboriosam tempore
          delectus? Mollitia fugit consequatur architecto ab quos libero aliquam
          eos et eveniet consequuntur corporis alias asperiores aliquid quidem
          quam vel consectetur animi similique quod vitae ad, repudiandae
          aperiam! Laudantium, enim aspernatur? Iure possimus voluptate labore,
          beatae maxime voluptatem? Excepturi quibusdam, provident, velit esse
          dignissimos accusamus fuga maiores nostrum magni ab, quaerat aliquid.
          Nobis magnam, assumenda mollitia a corporis cumque ipsum quos?
          Distinctio est deserunt doloribus rerum, esse temporibus quidem,
          inventore consequatur cumque tempore in labore nostrum soluta non
        </Text>
      </div>
      <div className="flex justify-between">
        <Badge>like 0</Badge>
        <Badge>comment 0</Badge>
      </div>
      <div className="flex justify-evenly border-t mt-1 py-1">
        <Button leftSection={<BiSolidLike />} variant="default">
          like
        </Button>
        <Button leftSection={<BiCommentDetail />} variant="default">
          comment
        </Button>
        <CopyButton value="https://mantine.dev">
          {({ copied, copy }) => (
            <Button
              leftSection={<PiShareNetworkFill />}
              variant="default"
              onClick={copy}
            >
              {copied ? "Copied" : "share"}
            </Button>
          )}
        </CopyButton>
        <Button rightSection={<FaArrowRightLong />} variant="default">
          View
        </Button>
      </div>
    </Paper>
  );
};

export default PostCard;
