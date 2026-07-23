import BlogTable from "@/components/BlogTable";
import Topbar from "@/components/Topbar";

const BlogsPage = () => {
  return (
    <div>
      <Topbar />
      <h1 className="text-center text-2xl my-3 md:text-4xl">Blogs</h1>
      <BlogTable />
    </div>
  );
};

export default BlogsPage;
