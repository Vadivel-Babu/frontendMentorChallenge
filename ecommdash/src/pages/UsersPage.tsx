import Filter from "@/components/Filter";
import Loader from "@/components/Loader";
import Topbar from "@/components/Topbar";
import UsersTable from "@/components/UsersTable";
import { useState } from "react";

const UsersPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="w-full">
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Users</h1>
      <Filter />
      {isLoading ? <Loader /> : <UsersTable />}
    </div>
  );
};

export default UsersPage;
