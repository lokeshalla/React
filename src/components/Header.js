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
    <div className="flex h-16 justify-between inset-shadow-sm shadow-2xl rounded-xl m-2 bg-sky-300">
      <div className="flex gap-5 ml-2">
        <Link to="/">
          <img
            className="h-full w-full rounded-2xl p-1"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
        <span className="cursor-pointer mt-5">Location</span>
      </div>
      <div className="flex items-center mr-4">
        <ul className="flex gap-4">
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="cursor-pointer">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <button
            className="cursor-pointer"
            onClick={() =>
              btnName === "Sign in"
                ? setBtnName("Sign out")
                : setBtnName("Sign in")
            }
          >
            {btnName}
          </button>
          <li className="cursor-pointer">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
