import { Fragment, useContext } from "react";
import { UserContext } from "../../../context/user.context";
import { Outlet, Link } from "react-router-dom";
// import { ReactComponent as CrownLogo } from "../";
import "./navigation.style.scss";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  console.log(currentUser);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div className="logo">LOGO</div>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN-IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
