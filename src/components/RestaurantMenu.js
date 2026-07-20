import { RESTAURANT_IMG_API } from "../utils/constants";
import { useParams } from "react-router";
import { MenuShimmer } from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantInfo = useRestaurantMenu(resId);

  if (restaurantInfo === null) {
    return <MenuShimmer />;
  }

  const {
    name,
    cuisines = [],
    costForTwoMessage,
    cloudinaryImageId,
  } = restaurantInfo?.cards?.[2]?.card?.card?.info ?? {};

  const regularCards =
    restaurantInfo?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR?.cards,
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards ?? [];

  const itemCards =
    regularCards.find((card) => card?.card?.card?.itemCards)?.card?.card
      ?.itemCards ?? [];

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
        {itemCards.length === 0 ? (
          <li>No items available</li>
        ) : (
          itemCards.map((item, index) => (
            <li key={`${item?.card?.info?.id}-${index}`}>
              {item?.card?.info?.name} - {"₹ "}
              {item?.card?.info?.defaultPrice / 100 ||
                item?.card?.info?.price / 100}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
