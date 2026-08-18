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
    <div className="h-108 w-70 border border-gray-400 rounded-3xl p-4 bg-gray-100 transition-shadow duration-300 hover:shadow-xl">
      <img
        className="w-full h-50 rounded-3xl object-cover"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="mx-2">
        <h3 className="font-bold my-3">{name}</h3>
        <h6>{avgRating} stars</h6>
        <h6>{deliveryTime} mins</h6>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{locality}</h6>
      </div>
    </div>
  );
};

// Higher Order Component

export const withPromotedLabel = (RestaurentCard) => {
  return ({ resData }) => {
    const promo = resData?.info?.aggregatedDiscountInfoV3;
    return (
      <div className="relative">
        <div className="absolute top-4 right-4 left-4 h-50 rounded-3xl flex items-end p-4 bg-gradient-to-t from-black/80 via-black/10 to-transparent">
          <span className="text-white text-lg font-bold">
            {promo?.header} {promo?.subHeader}
          </span>
        </div>
        <RestaurentCard resData={resData} />
      </div>
    );
  };
};

export default RestaurentCard;
