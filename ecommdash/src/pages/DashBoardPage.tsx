import DashboardTable from "@/components/DashboardTable";
import Loader from "@/components/Loader";
import PostChart from "@/components/PostChart";
import StatCard from "@/components/StatCard";
import Topbar from "@/components/Topbar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import UserChart from "@/components/UserChart";
import { useState } from "react";

const DashBoardPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Topbar />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="max-w-300 md:px-2 mx-auto">
          <div className="flex justify-between mt-2">
            <StatCard />
            <StatCard />
            <StatCard />
            <StatCard />
          </div>
          <div className="flex justify-between gap-2 my-2">
            <div className="rounded-xl w-450 p-2 border">
              <h1 className="text-md text-center my-1 md:text-xl">
                Posts Posted
              </h1>
              <div className="flex gap-1 mb-1.5">
                <label htmlFor="post filter">Filter by date</label>
                <Select>
                  <SelectTrigger id="post filter" className="w-full max-w-48">
                    <SelectValue placeholder="All" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Post</SelectLabel>

                      <SelectItem value="k">joi</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <PostChart />
            </div>
            <div className="border rounded-xl p-2">
              <h1 className="text-md text-center my-1 md:text-xl">
                Posts Type
              </h1>
              <UserChart />
            </div>
          </div>
          <DashboardTable />
        </div>
      )}
    </div>
  );
};

export default DashBoardPage;
