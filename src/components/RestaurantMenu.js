import { IMG_CDN_URL, FETCH_MENU_URL } from "../config";
import ShimmerUi from "./ShimmerUi";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";
import MenuItem from "./MenuItem";

const RestaurantMenu = () => {
  const { restaurantId: id } = useParams();
  const [restaurantData, restaurantMenuData] = useRestaurantMenu(id);
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return restaurantData.length === 0 ? (
    <ShimmerUi items="1" />
  ) : (
    <div className="flex-row max-w-2xl mx-auto">
      <div className="flex justify-between mt-5">
        <div>
          <h2 className="font-bold text-2xl">{restaurantData.name}</h2>
          <h2 className="text-lg">{restaurantData.cuisines.join(", ")}</h2>
        </div>
        <img
          className="w-96"
          src={IMG_CDN_URL + restaurantData.cloudinaryImageId}
        />
      </div>
      <div className="" data-testid="menu">
        <h2 className="font-bold text-xl">Menu</h2>
        <ul className="m-2">
          {restaurantMenuData.map((item) => (
            <MenuItem key={item} title={item?.card?.card?.title} menuItems={item?.card?.card?.itemCards}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
