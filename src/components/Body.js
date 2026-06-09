import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  //Local State Variable - React - Super Powerful Variable
  const [listOfRestaurents, setListOfRestaurents] = useState(resList);

  return (
    <>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurents.filter(
              (res) => res.info.avgRating > 4,
            );
            setListOfRestaurents(filteredList);
          }}
        >
          Top Rated restaurents
        </button>
      </div>
      <div className="restaurent-container">
        {listOfRestaurents.map((restaurent) => (
          <RestaurentCard key={restaurent.info.id} resData={restaurent} />
        ))}
      </div>
    </>
  );
};

export default Body;
