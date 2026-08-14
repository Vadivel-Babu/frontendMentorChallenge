import { NavLink } from "react-router-dom";

interface NavCardProps {
  text: string;
}

const NavCard = ({ text }: NavCardProps) => {
  return (
    <div className="border-0 rounded-2xl p-3 space-y-2 shadow-2xl min-w-50">
      <h1 className="font-bold text-xl">{text}</h1>
      <NavLink
        className={"text-blue-400 font-semibold underline "}
        to={`/${text}`}
      >
        see
      </NavLink>
    </div>
  );
};

export default NavCard;
