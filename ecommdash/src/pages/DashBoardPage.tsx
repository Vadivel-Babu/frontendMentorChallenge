import StatCard from "@/components/StatCard";
import Topbar from "@/components/Topbar";

const DashBoardPage = () => {
  return (
    <div>
      <Topbar />
      <div className="flex justify-between">
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
    </div>
  );
};

export default DashBoardPage;
