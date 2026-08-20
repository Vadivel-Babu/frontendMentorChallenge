const Spinner = () => {
  return (
    <div className="mx-auto max-w-max">
      <div className="animate-spin size-20 rounded-full bg-linear-to-r from-indigo-500   to-white flex items-center justify-center">
        <div className="size-16 rounded-full bg-white"></div>
      </div>
      <h3 className="text-center text-xl font-bold mt-2">Spinning...</h3>
    </div>
  );
};

export default Spinner;
