import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { perPage } from "../../const/const.js"
import { selectCatalogTotal } from "../../redux/catalog/selectors.js";

import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const totalItem = useSelector(selectCatalogTotal);
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: "1", limit: perPage });
    }
  }, []);

  const onLoadMore = () => {
    setSearchParams({ page: "1", limit: totalItem});
  };
  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;