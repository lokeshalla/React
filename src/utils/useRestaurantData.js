import { useState, useEffect } from "react";
import { API_URL, CORS_PROXY } from "./constants";

const useRestaurantData = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await fetch(CORS_PROXY + API_URL);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      setListOfRestaurants(
        data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants,
      );
    } catch (err) {
      console.error(err);
    }
  }

  return listOfRestaurants;
};

export default useRestaurantData;
