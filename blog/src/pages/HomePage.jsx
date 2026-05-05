import PostCard from "../components/PostCard";
import ProfileCard from "../components/ProfileCard";
import CommentCard from "../components/CommentCard";
import TopPostCard from "../components/TopPostCard";
import { useGetPosts } from "../hooks/usePosts";
import { Button, Loader } from "@mantine/core";
import FilterBox from "../components/FilterBox";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
  });
  const [appliedFilters, setAppliedFilters] = useState({
    search: "",
    category: "",
  });
  const { data, isLoading } = useGetPosts(appliedFilters);
  const { user } = useContext(AuthContext);

  function handleSearch() {
    setAppliedFilters(filters);
  }

  function reset() {
    setFilters({
      search: "",
      category: "",
    });
    setAppliedFilters({});
  }

  return (
    <div className="container">
      <FilterBox
        filters={filters}
        setFilters={setFilters}
        handleSearch={handleSearch}
        reset={reset}
      />

      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-125">
          <Loader color="indigo" size="xl" mt={50} />
        </div>
      ) : (
        <div className="block p-4 md:flex  justify-around md:pt-1 h-full w-full">
          <ProfileCard />
          {data?.length === 0 && (
            <div className="mt-10 text-4xl">
              <p>Post Not Found</p>
              <Button onClick={reset}>Reset</Button>
            </div>
          )}
          <div className="flex-col space-y-1 h-[85dvh] overflow-y-scroll scrollbar-thin py-1">
            {data?.map((post) => (
              <PostCard key={post.id} post={post} user={user} />
            ))}
          </div>
          <TopPostCard />
        </div>
      )}
    </div>
  );
};

export default HomePage;
