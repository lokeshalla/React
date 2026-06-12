import RestaurentCard from "./RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //Local State Variable - React - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.495272&lng=78.3856699&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const data = await response.json();
    console.log(data);
    setListOfRestaurants(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="restaurent-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </>
  );
};

export default Body;
