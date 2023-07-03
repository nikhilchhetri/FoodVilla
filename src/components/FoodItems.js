import { IMG_CDN_URL } from "../config";

const FoodItems = ({ name, price, imageId }) => {
  return (
    <div className="p-2 m-2 shadow-lg bg-pink-50 flex justify-around">
      <img className="w-60" src={IMG_CDN_URL + imageId} />
      <h2 className="font-semibold text-lg">
        {name} 
      </h2>
      <h2>Rs. {price / 100}</h2>
    </div>
  );
};

export default FoodItems;
