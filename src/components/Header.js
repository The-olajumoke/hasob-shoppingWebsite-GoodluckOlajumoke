import React from "react";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import CancelIcon from "@material-ui/icons/Cancel";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useStateValue } from "./StateProvider";
import { useState } from "react";


 function Header({ onClick }) {
  const [{ basket }] = useStateValue();

  const [value, setValue] = useState();
  const history = useHistory();

  const handleChange = (e) => {
    if (e.keyCode === 13) {
      setValue(e.target.value);
      history.push(`/search/${value}`);
      console.log(value);
    }
  };
  return (
    <nav className="header">
      <div className="">
        <Link to="/">
          <h3 className="header__logo">
            <span className="specA">A</span>
            ntique
          </h3>
        </Link>
      </div>
      <div className="header__search">
        <Link to="/search/">
          {" "}
          <SearchIcon className="header__searchIcon" />{" "}
        </Link>
        <input
          type="text"
          className="header__searchInput"
          placeholder="Search Items..."
          value={value}
          onKeyDown={handleChange}
        />
        <CancelIcon className="header__deleteIcon" />
      </div>

      <div className="headerNav ">
        <Link to="/signup">
          <button className="header__button">Sign In</button>
        </Link>
        <Link to="/cart" className="cartCount">
          {" "}
          <ShoppingCartIcon className="header__cart" />{" "}
          <p className="cartCountnum">{basket?.length}</p>
        </Link>
        <Link to="/home">
          <img
            className="header__accImg border bg-primary"
            src="https://inst.eecs.berkeley.edu/~cs194-26/fa17/upload/files/proj4/cs194-26-adq/asianguy.jpg"
            alt=""
          />
        </Link>
      </div>
    </nav>
  );
}

export default Header;
