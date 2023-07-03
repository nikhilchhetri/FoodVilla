const ShimmerUi = (props) => {
  return (
    <div
      className="flex flex-wrap justify-between gap-2 ml-3 mr-3 mt-20"
      data-testid="shimmer"
    >
      {Array(parseInt(props.items))
        .fill("")
        .map((e, index) => (
          <div key={index} className="w-56 h-80 bg-gray-200"></div>
        ))}
    </div>
  );
};

export default ShimmerUi;
