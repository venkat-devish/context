import React, { useState } from "react";
import "./Header.scss";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Link, Outlet } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="header__container">
        <Link to="/">Context</Link>
        <div className="header__search">
          <input type="text" placeholder="Search items..." />
          <div className="header__search-icon">
            <SearchIcon />
          </div>
        </div>
        <div className="header__dropdown">
          <button className="header__dropdown-btn" onClick={dropDownHandler}>
            <span className="header__dropdown-cart">
              <ShoppingCartIcon />
            </span>
            <span className="header__dropdown-count">10</span>
            <span>{isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}</span>
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
