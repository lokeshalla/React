import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign in");
  return (
    <div className="header">
      <div className="left-header">
        <img className="logo" src={LOGO_URL} alt="logo" />
        <span className="location-btn">Location</span>
      </div>
      <div className="right-header">
        <ul className="nav-items">
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <button
            className="signin-btn"
            onClick={() =>
              btnName === "Sign in"
                ? setBtnName("Sign out")
                : setBtnName("Sign in")
            }
          >
            {btnName}
          </button>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
