import { nanoid } from "nanoid";

import CatalogItem from "../CatalogItem/CatalogItem";

import css from "./CatalogList.module.css";

const CatalogList = ({ catalog }) => {
  return (
    <>
      {catalog && catalog.length > 0 ? (
        <ul className={css.catalogList}>
          {catalog.map((item) => (
            <li className={css.catalogItem} key={nanoid()}>
              <CatalogItem item={item} />
            </li>
          ))}
        </ul>
      ) : (
        <p className={css.notFound}>No campers were found for your request</p>
      )}
    </>
  );
};

export default CatalogList;
