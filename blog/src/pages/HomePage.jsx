import PostCard from "../components/PostCard";
import ProfileCard from "../components/ProfileCard";
import CommentCard from "../components/CommentCard";
import TopPostCard from "../components/TopPostCard";

const HomePage = () => {
  return (
    <div className="flex container justify-around pt-1 h-full">
      <ProfileCard />
      <PostCard />
      <TopPostCard />
    </div>
  );
};

export default HomePage;
