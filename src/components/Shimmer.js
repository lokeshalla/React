const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-30">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            className="h-108 w-70 border m-3 border-gray-400 rounded-3xl p-4 bg-gray-100"
            key={index}
          >
            <div className="shimmer w-full h-50 rounded-3xl"></div>
            <div className="mt-[30px]">
              <div className="shimmer h-[18px] w-[70%] my-2.5 rounded-[5px]"></div>
              <div className="shimmer h-3 w-[30%] my-2.5 rounded-[5px]"></div>
              <div className="shimmer h-3 w-[30%] my-2.5 rounded-[5px]"></div>
              <div className="shimmer h-3 w-[85%] my-2.5 rounded-[5px]"></div>
              <div className="shimmer h-3 w-[30%] my-2.5 rounded-[5px]"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export const MenuShimmer = () => {
  return (
    <div className="max-w-[900px] mx-auto pt-[18px] px-[55px] pb-10 text-center">
      <div className="shimmer w-[250px] h-[35px] mx-auto mb-[30px] rounded-md"></div>
      <div className="shimmer w-[90%] h-[300px] mx-auto rounded-[30px]"></div>
      <div className="shimmer w-[250px] h-5 mx-auto mt-[15px] mb-[30px] rounded-md"></div>

      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={index}
          className="shimmer w-[55%] h-[18px] my-3 mx-auto rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default Shimmer;
