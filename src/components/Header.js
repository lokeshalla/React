import { LOGO_URL } from "../utils/constants";

const Header = () => {
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
          <li>Sign in</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
