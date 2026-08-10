import { Spinner } from "./ui/spinner";

const Loader = () => {
  return (
    <div className=" flex flex-col items-center mt-10 lg:mt-30">
      <Spinner className="size-5 lg:size-12" />
      <p className="text-md lg:text-xl">Loading...</p>
    </div>
  );
};

export default Loader;
