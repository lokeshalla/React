import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState, useEffect } from "react";

const Body = () => {
  //Local State Variable - React - Super Powerful Variable
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

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
        {listOfRestaurants.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </>
  );
};

export default Body;
