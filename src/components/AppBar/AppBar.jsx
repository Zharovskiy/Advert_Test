import clsx from "clsx";

import Navigation from "../Navigation/Navigation.jsx";

import css from "./AppBar.module.css";

const buildLinkClass = ({ isActive }) =>
  clsx(css.link, {
    [css.active]: isActive,
  });

const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation buildLinkClass={buildLinkClass} />
    </header>
  );
};

export default AppBar;
