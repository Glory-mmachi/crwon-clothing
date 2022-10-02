import { Fragment, useContext } from "react";
import { UserContext } from "../../../context/user.context";
import { DropDownContext } from "../../../context/dropDown.context";
import { Outlet } from "react-router-dom";
import Loogo from "../../logo/logo";
import { signOutUser } from "../../../utils/firebase.utils";
import CartIcon from "../../cart-icon/cart-icon.component";
import CartDropdown from "../../cart-dropdown/cart-dropdown.component";

import {
  NavigationContainer,
  LogoConctainer,
  NavLinkContainer,
  NavLink,
} from "./navigation.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isDropped } = useContext(DropDownContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoConctainer to="/">
          <Loogo />
        </LogoConctainer>
        <NavLinkContainer>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              Sign out
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinkContainer>
        {isDropped && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
