import PostCard from "../components/PostCard";
import ProfileCard from "../components/ProfileCard";
import CommentCard from "../components/CommentCard";
import TopPostCard from "../components/TopPostCard";
import { useGetPosts } from "../hooks/usePosts";
import { Loader } from "@mantine/core";
import FilterBox from "../components/FilterBox";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const HomePage = () => {
  const { data, isLoading } = useGetPosts();
  const { user } = useContext(AuthContext);
  console.log(data);

  return (
    <div className="">
      <FilterBox />
      {isLoading ? (
        <div className="flex items-center justify-center w-full min-h-125">
          <Loader color="indigo" size="xl" mt={50} />
        </div>
      ) : (
        <div className="block p-4 md:flex container justify-around md:pt-1 h-full w-full">
          <ProfileCard />
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
