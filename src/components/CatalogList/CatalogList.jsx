import { nanoid } from "nanoid";

import CatalogItem from "../CatalogItem/CatalogItem";

import css from "./CatalogList.module.css";

const CatalogList = ({ catalog }) => {
  return (
    <ul className={css.catalogList}>
      {catalog &&
        catalog.map(({ ...item }) => {
          return (
            <li className={css.catalogItem} key={nanoid()}>
              <CatalogItem item={item} />
            </li>
          );
        })}
    </ul>
  );
};

export default CatalogList;
