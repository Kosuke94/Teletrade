import NavBarMenu from "../navbar/navbar-menu/NavBarMenu";
import Button from "@material-ui/core/Button";
import "../header/Header.css";
import React, { useState } from "react";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn")
  );

  const setLoggedIn = () => {
    setIsLoggedIn(true);
    localStorage.setItem(isLoggedIn, true);
  };

  return (
    <header className="header">
      <div className="container">
        <NavBarMenu isLoggedIn={isLoggedIn} />
        <Button
          className="loginButton"
          onClick={setLoggedIn}
          variant="contained"
          color="primary"
        >
          Log In
        </Button>
      </div>
    </header>
  );
};

export default Header;
