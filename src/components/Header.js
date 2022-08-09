import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="search">google2.0</Link>
      </div>
      <div className="Search_area">
        <div className="text">
          <input type="text" placeholder="     SEARCH" />
        </div>
        <div className="search_icon">
          <img src=".../public/image/icon.webp" alt="se" />
        </div>
      </div>
    </div>
  );
}
