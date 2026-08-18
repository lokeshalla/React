import RestaurentCard, { withPromotedLabel } from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useRestaurantData from "../utils/useRestaurantData";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurentCardPromoted = withPromotedLabel(RestaurentCard);

const Body = () => {
  //Local State Variable - React - Super Powerful Variable

  const listOfRestaurants = useRestaurantData();

  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredRestaurants(listOfRestaurants);
  }, [listOfRestaurants]);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you are Offline. Please check your internet connection</h1>
    );
  }

  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="flex m-8 gap-10">
        <div className="flex gap-4">
          <input
            type="search"
            className="border border-gray-400 rounded-lg py-2 px-3"
            placeholder="Search for restaurants"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)} // e is event object
          />
          <button
            className="border border-gray-400 rounded-lg py-2 px-3.5 cursor-pointer"
            onClick={() =>
              setFilteredRestaurants(
                listOfRestaurants.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchText.toLowerCase()),
                ),
              )
            }
          >
            Search
          </button>
        </div>
        <button
          className="border border-gray-400 rounded-lg py-2 px-3.5 cursor-pointer"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap gap-5 p-5">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3 ? (
              <RestaurentCardPromoted resData={restaurant} />
            ) : (
              <RestaurentCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
