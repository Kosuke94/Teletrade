import NavBarMenuItem from "../navbar-menu-item/NavBarMenuItem";

const NavBarMenu = (props) => {
  return (
    <div className="navMenu">
      <h2>NavBar</h2>
      <ul>
        <NavBarMenuItem link="/" exact>
          Home
        </NavBarMenuItem>
        {props.isLoggedIn && (
          <NavBarMenuItem link="/profile">Profile</NavBarMenuItem>
        )}
      </ul>
    </div>
  );
};

export default NavBarMenu;
