import PostCard from "../components/PostCard";
import ProfileCard from "../components/ProfileCard";
import CommentCard from "../components/CommentCard";

const HomePage = () => {
  return (
    <div className="flex space-x-1 container pt-1 h-full">
      <ProfileCard />
      <PostCard />
      <CommentCard />
    </div>
  );
};

export default HomePage;
