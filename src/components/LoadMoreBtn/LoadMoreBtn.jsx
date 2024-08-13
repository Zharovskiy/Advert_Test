import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { perPage } from "../../const/const.js";

import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    if (!page) {
      setSearchParams({ page: "1", limit: perPage });
    }
  }, []);

  const onLoadMore = () => {
    const nextPage = parseInt(page) + 1;
    setSearchParams({ page: nextPage, limit: perPage });
  };

  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
