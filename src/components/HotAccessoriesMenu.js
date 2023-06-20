import React from "react";
import { Link } from "react-router-dom";
import "../styles/accessories.css"

const HotAccessoriesMenu = () => {
  return (
    <div className="HotAccessoriesMenu">
      <Link className="HotAccessoriesLink" to="/music">
        Music Store
      </Link>
      <Link className="HotAccessoriesLink" to="/Smart-Device">
        Smart Devices
      </Link>
      <Link className="HotAccessoriesLink" to="/home">
        Home
      </Link>
      <Link className="HotAccessoriesLink" to="/life-Style">
        Life Style
      </Link>
      <Link className="HotAccessoriesLink" to="/mobile-Accessories">
        Mobile Accessories
      </Link>
    </div>
  );
};

export default HotAccessoriesMenu;
