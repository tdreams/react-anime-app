import React from "react";
import "../index.css";
import {
  HiMagnifyingGlass,
  HiOutlineSquares2X2,
  HiOutlineUserCircle,
} from "react-icons/hi2";
const Nav = () => {
  return (
    <div className="nav">
      <div className="left-nav">
        <div className="logo">VueAnime</div>
        <div className="categories">
          <div className="menu">
            <a href="#">TopAnime</a>
            <a href="#">Action</a>
            <a href="#">Comedy</a>
            <a href="#">Drama</a>
          </div>
          <div className="icon">
            <a href="#">
              <HiMagnifyingGlass />
            </a>
            <a href="#">
              <HiOutlineSquares2X2 />
            </a>
            <a href="#">
              <HiOutlineUserCircle />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
