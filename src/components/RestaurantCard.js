import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  locality,
  areaName,
}) => {
  return (
    <div className="w-56 hover:shadow-md p-2">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{cuisines.join(", ")}</p>
      <p>{avgRating} Stars</p>
      <div className="area">
        <h4>{locality}</h4>
        <h4>{areaName}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
