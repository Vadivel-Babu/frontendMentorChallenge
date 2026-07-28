import BlogTable from "@/components/BlogTable";
import Filter from "@/components/Filter";
import Topbar from "@/components/Topbar";

const BlogsPage = () => {
  return (
    <div>
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Blogs</h1>
      <Filter />
      <BlogTable />
    </div>
  );
};

export default BlogsPage;
