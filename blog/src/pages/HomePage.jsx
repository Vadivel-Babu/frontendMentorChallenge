import PostCard from "../components/PostCard";
import ProfileCard from "../components/ProfileCard";
import CommentCard from "../components/CommentCard";
import TopPostCard from "../components/TopPostCard";
import { useGetPosts } from "../hooks/usePosts";
import { Loader } from "@mantine/core";

const HomePage = () => {
  const { data, isLoading } = useGetPosts();
  console.log(data);

  return (
    <div className="flex container justify-around pt-1 h-full">
      {isLoading ? (
        <Loader color="indigo" size="xl" mt={50} />
      ) : (
        <>
          <ProfileCard />
          <div className="flex-col h-[85dvh] overflow-y-scroll mb-1">
            {data?.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          <TopPostCard />
        </>
      )}
    </div>
  );
};

export default HomePage;
