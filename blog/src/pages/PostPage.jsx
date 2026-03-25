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
} from "@mantine/core";
import { MdOutlineDeleteOutline, MdOutlineModeEdit } from "react-icons/md";
import { NavLink } from "react-router-dom";
import CommentCard from "../components/CommentCard";

const items = [
  { title: "Home", href: "/" },
  { title: "Post", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const PostPage = () => {
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>

      <Box>
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
            delectus officia mollitia, eos sequi illum praesentium. Quo
            doloremque repellendus aliquam corrupti. Eaque, earum nostrum
            exercitationem quo quaerat nihil asperiores, doloribus recusandae,
            fugiat facilis voluptatum architecto dignissimos. Porro qui sapiente
            amet, tenetur soluta aspernatur quia fugit suscipit alias
            exercitationem ipsum optio? Rerum voluptatibus veniam asperiores,
            itaque facere quibusdam consectetur labore fuga laborum temporibus
            incidunt laboriosam tempore delectus? Mollitia fugit consequatur
            architecto ab quos libero aliquam eos et eveniet consequuntur
            corporis alias asperiores aliquid quidem quam vel consectetur animi
            similique quod vitae ad, repudiandae aperiam! Laudantium, enim
            aspernatur? Iure possimus voluptate labore, beatae maxime
            voluptatem? Excepturi quibusdam, provident, velit esse dignissimos
            accusamus fuga maiores nostrum magni ab, quaerat aliquid. Nobis
            magnam, assumenda mollitia a corporis cumque ipsum quos? Distinctio
            est deserunt doloribus rerum, esse temporibus quidem, inventore
            consequatur cumque tempore in labore nostrum soluta non
          </Text>
        </div>
      </Box>
      <CommentCard />
    </div>
  );
};

export default PostPage;
