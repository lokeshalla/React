import { CDN_URL } from "../utils/constants";

const RestaurentCard = ({ resData }) => {
  const {
    name,
    avgRating,
    sla: { deliveryTime },
    cuisines,
    locality,
    cloudinaryImageId,
  } = resData?.info;
  return (
    <div className="restaurent-card">
      <img className="restaurent-img" src={CDN_URL + cloudinaryImageId} />
      <div className="restaurent-info">
        <h3>{name}</h3>
        <h6>{avgRating} stars</h6>
        <h6>{deliveryTime} mins</h6>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{locality}</h6>
      </div>
    </div>
  );
};

export default RestaurentCard;
