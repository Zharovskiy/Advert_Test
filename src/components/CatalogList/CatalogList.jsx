import { nanoid } from "nanoid";

import CatalogItem from "../CatalogItem/CatalogItem";

import css from "./CatalogList.module.css";

const CatalogList = ({ data }) => {
  return (
    <ul className={css.catalogList}>
      {data &&
        data.map(({ ...item }) => {
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
