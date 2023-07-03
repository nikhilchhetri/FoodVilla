import React, { useState } from "react";
import { IMG_CDN_URL } from "../config";
import { useDispatch } from "react-redux";
import { addItems } from "../../utils/cartSlice";
import altFoodImage from "../assets/images/altImageMenu.jpg";

const MenuItem = ({ title, menuItems }) => {
  const dispatch = useDispatch();
  const [toggleMenu, setToggleMenu] = useState(true);
  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div className="mt-5">
      <h1 className="font-semibold bg-slate-100 pl-2" onClick={() => setToggleMenu(!toggleMenu)}>
        {title}
      </h1>
      {toggleMenu && menuItems.map((menuItem) => (
        <li key={menuItem?.card?.info?.id} className="flex justify-between m-5">
          {menuItem?.card?.info?.name} - Rs. {menuItem?.card?.info?.price / 100}
          <div className="relative">
            <img
              className="w-56"
              src={IMG_CDN_URL + menuItem?.card?.info?.imageId}
              alt="Alternate Image"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null;
                currentTarget.src = altFoodImage;
              }}
            />
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-1 px-2 rounded h-10 absolute top-2/3 left-1/3"
              onClick={() => handleAddItem(menuItem?.card?.info)}
              data-testid="add-btn"
            >
              Add Item
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default MenuItem;
