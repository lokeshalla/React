import { useState, useEffect } from "react";
import { MENU_API_URL, CORS_PROXY } from "../utils/constants";
import { RESTAURANT_IMG_API } from "../utils/constants";
import { useParams } from "react-router";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(CORS_PROXY + MENU_API_URL + resId);
    const json = await data.json();
    setRestaurantInfo(json?.data);
  };

  if (restaurantInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, cloudinaryImageId } =
    restaurantInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    restaurantInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;

  return (
    <div className="restaurant-menu">
      <h1>{name}</h1>
      <img
        className="menu-hero-img"
        src={RESTAURANT_IMG_API + cloudinaryImageId}
      />
      <div>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </div>
      <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - {"₹ "}
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
