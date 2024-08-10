import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = ({ buildLinkClass }) => {
  return (
    <nav className={css.nav}>
      <NavLink className={buildLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={buildLinkClass} to="/catalog">
        Catalog
      </NavLink>
      <NavLink className={buildLinkClass} to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Navigation;