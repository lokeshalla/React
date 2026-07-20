import { useState, useEffect } from "react";
import { MENU_API_URL, CORS_PROXY } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(CORS_PROXY + MENU_API_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };
  return restaurantInfo;
};

export default useRestaurantMenu;
