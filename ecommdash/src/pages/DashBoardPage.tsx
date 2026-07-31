import DashboardTable from "@/components/DashboardTable";
import PostChart from "@/components/PostChart";
import StatCard from "@/components/StatCard";
import Topbar from "@/components/Topbar";
import UserChart from "@/components/UserChart";

const DashBoardPage = () => {
  return (
    <div>
      <Topbar />
      <div className="max-w-300 md:px-2 mx-auto">
        <div className="flex justify-between mt-2">
          <StatCard />
          <StatCard />
          <StatCard />
        </div>
        <div className="flex justify-between my-2">
          <PostChart />
          <UserChart />
        </div>
        <DashboardTable />
      </div>
    </div>
  );
};

export default DashBoardPage;
