import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <>
      <div className="filter">
        <select defaultValue="">
          <option value="" disabled>
            Sort by
          </option>
          <option value="relevance">Relevance</option>
          <option value="delivery">Delivery Time</option>
          <option value="rating">Rating</option>
          <option value="price-low-to-high">Cost: Low to High</option>
          <option value="price-high-to-low">Cost: High to Low</option>
        </select>
      </div>
      <div className="restaurent-container">
        {resList.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </>
  );
};

export default Body;
