import { Breadcrumbs } from "@mantine/core";
import { NavLink } from "react-router-dom";

const items = [
  { title: "Home", href: "/" },
  { title: "Profile", href: "#" },
].map((item, index) => (
  <NavLink to={item.href} key={index}>
    {item.title}
  </NavLink>
));

const ProfilePage = () => {
  return (
    <div className="container p-2">
      <Breadcrumbs>{items}</Breadcrumbs>
      <h1>profile page</h1>
    </div>
  );
};

export default ProfilePage;
