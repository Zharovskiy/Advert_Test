import useQueryParams from "../../hooks/useQueryParams.js";

import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = () => {
  const { getParam, setParam } = useQueryParams();
  const page = getParam("page");

  const onLoadMore = () => {
    const nextPage = parseInt(page) + 1;
    setParam("page", nextPage);
  };

  return (
    <button className={css.button} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
