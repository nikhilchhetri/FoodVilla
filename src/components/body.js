import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { filterData } from "../../utils/helper";
import useOnline from "../../utils/useOnline";

const BodyComponent = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=30.260068044271886&lng=78.06077219545841"
    );
    const json = await data.json();

    setfilteredRestaurants(
      json?.data.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestaurants(
      json?.data.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }
  
  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are currently offline</h1>;
  }

  return allRestaurants?.length === 0 ? (
    <ShimmerUi items="15" />
  ) : (
    <>
      <div className="m-5 space-x-3">
        <input
          type="text"
          className="p-1 border-2 border-orange-400 rounded-md"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          data-testid="search-input"
        />
        <button
          className="bg-orange-500 p-1 rounded-md text-white hover:bg-orange-600"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
          data-testid="search-button"
        >
          Search
        </button>
      </div>
      <div
        className="flex flex-wrap gap-12 ml-3 mr-3"
        data-testid="restaurant-list"
      >
        {
          /* {filteredRestaurants.length === 0 ? (
          <h1>No restaurants found</h1>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          ))
        )} */
          filteredRestaurants.map((restaurant) => (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          ))
        }
      </div>
    </>
  );
};

export default BodyComponent;
