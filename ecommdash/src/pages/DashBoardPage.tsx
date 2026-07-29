import PostChart from "@/components/PostChart";
import StatCard from "@/components/StatCard";
import Topbar from "@/components/Topbar";
import UserChart from "@/components/UserChart";

const DashBoardPage = () => {
  return (
    <div>
      <Topbar />
      <div className="flex justify-evenly mt-2">
        <StatCard />
        <StatCard />
        <StatCard />
      </div>
      <div className="flex justify-between">
        <PostChart />
        <UserChart />
      </div>
    </div>
  );
};

export default DashBoardPage;
