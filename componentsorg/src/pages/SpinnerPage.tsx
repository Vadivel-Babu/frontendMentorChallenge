import Backbtn from "../components/Backbtn";
import Spinner from "../components/Spinner";

const SpinnerPage = () => {
  return (
    <div className="p-5">
      {" "}
      <Backbtn />
      <h1 className="text-2xl font-bold text-center mb-5">Spinner</h1>
      <Spinner />
    </div>
  );
};

export default SpinnerPage;
