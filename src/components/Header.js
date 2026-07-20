import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Sign in");
  // If no dependency array => useEffect is called on every render.
  // If dependency array is empty = [] => useEffect is called only after initial render. (just once).
  // If dependency array is [btnNameReact] => useEffect is called every time btnNameReact is updated.

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="left-header">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
        </Link>
        <span className="location-btn">Location</span>
      </div>
      <div className="right-header">
        <ul className="nav-items">
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
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
