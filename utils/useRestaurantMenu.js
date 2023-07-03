import { FETCH_MENU_URL } from "../src/config";
import { useEffect, useState } from "react";

const useRestaurantMenu = (id) => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [restaurantMenuData, setRestaurantMenuData] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    const datas = await fetch(FETCH_MENU_URL + id);
    const parsedData = await datas.json();

    setRestaurantData(parsedData?.data?.cards[0]?.card?.card?.info);
    const menu1 =
      parsedData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const menu2 =
      parsedData?.data?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let menu = [];
    menu1 === undefined ? (menu = menu2) : (menu = menu1);
    const filteredMenu = menu.filter((element) =>
      element?.card?.card?.hasOwnProperty("itemCards")
    );
    setRestaurantMenuData(filteredMenu);
  }
  return [restaurantData, restaurantMenuData];
};

export default useRestaurantMenu;
