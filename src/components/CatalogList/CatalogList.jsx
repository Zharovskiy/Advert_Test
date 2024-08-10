import CatalogItem from "../CatalogItem/CatalogItem";

import css from "./CatalogList.module.css";

const CatalogList = ({data}) => {
  return (
    <ul className={css.catalogList}>
      {data && data.map(({...item}) => {
        return (
          <li className={css.catalogItem} key={item._id}>
            <CatalogItem item={item}/>
          </li>
        );
      })}
    </ul>
  );
};

export default CatalogList;