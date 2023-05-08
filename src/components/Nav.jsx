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
      <div className="logo">VueAnime</div>
      <div>
        <a href="#">TopAnime</a>
        <a href="#">Action</a>
        <a href="#">Comedy</a>
        <a href="#">Drama</a>
      </div>
      <div className="icon">
        <HiMagnifyingGlass />
        <HiOutlineSquares2X2 />
        <HiOutlineUserCircle />
      </div>
    </div>
  );
};

export default Nav;
