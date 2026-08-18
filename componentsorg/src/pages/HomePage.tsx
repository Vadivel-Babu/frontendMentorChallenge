import NavCard from "../components/NavCard";

const navArr: any = [
  { name: "switch" },
  { name: "tab" },
  { name: "modal" },
  { name: "accordion" },
  { name: "pagination" },
  { name: "carsoul" },
];

const HomePage = () => {
  return (
    <div className=" p-5">
      <h1 className="text-2xl font-bold text-center my-2">All components</h1>
      <div className="flex gap-1">
        {navArr.map((nav: any) => (
          <NavCard key={nav} text={nav.name} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
