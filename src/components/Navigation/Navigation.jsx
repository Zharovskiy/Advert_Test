import { NavLink } from "react-router-dom";

import css from "./Navigation.module.css";

const Navigation = ({ buildLinkClass }) => {
  return (
    <nav className={css.nav}>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink className={buildLinkClass} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={buildLinkClass} to="/catalog">
            Catalog
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink className={buildLinkClass} to="/favorites">
            Favorites
          </NavLink>
        </li>
      </ul> 
    </nav>
  );
};

export default Navigation;