import React from "react";
import BlogSpaceLogo from "../logo.svg";

// Encountring a problem while resizing the window to lower screen
// Navbar is being shown on the right end
// It is observed that this is happening due to the transition property

// On mobile screen, Navbar turned on. Resize the window to desktop screen
// Now if the window is resized to mobile screen again. Navbar will be turned on, as it's been
// turned on earlier.

export default function Header() {
  const [headerNav, setHeaderNav] = React.useState("header__navigation");

  const handleClick = () => {
    headerNav === "header__navigation"
      ? setHeaderNav("header__navigation toggler__active")
      : setHeaderNav("header__navigation");
  };

  return (
    <header className="div-shadow">
      <div className="container header">
        <div className="header__logo">
          <img
            className="header__logo--img"
            src={BlogSpaceLogo}
            alt="blog space icon"
          />
          <h1 className="header__logo--txt">Blog Space</h1>
        </div>
        <div className={headerNav}>
          <a href="#">About</a>
          <a href="#">Contact</a>
          <a href="#">Logout</a>
        </div>
        <div onClick={handleClick} className="header__navigation--toggler">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
}
