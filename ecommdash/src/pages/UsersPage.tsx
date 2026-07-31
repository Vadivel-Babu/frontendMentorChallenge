import Topbar from "@/components/Topbar";
import UsersTable from "@/components/UsersTable";

const UsersPage = () => {
  return (
    <div className="w-full">
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Users</h1>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
