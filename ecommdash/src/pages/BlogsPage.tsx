import BlogTable from "@/components/BlogTable";
import Filter from "@/components/Filter";
import Loader from "@/components/Loader";
import Topbar from "@/components/Topbar";
import { useState } from "react";

const BlogsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div>
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Blogs</h1>
      <Filter />
      {isLoading ? <Loader /> : <BlogTable />}
    </div>
  );
};

export default BlogsPage;
