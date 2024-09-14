import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/catalog/operations";
import {
  selectCatalog,
  selectPagination,
  selectLoading,
} from "../../redux/catalog/selectors";
import useQueryParams from "../../hooks/useQueryParams.js";
import { useSearchParams } from "react-router-dom";
import { PER_PAGE } from "../../const/const.js";

import ContentMarkup from "../../components/ContentMarkup/ContentMarkup.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import CatalogList from "../../components/CatalogList/CatalogList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const loading = useSelector(selectLoading);
  const { totalItems } = useSelector(selectPagination);
  const { setParam, getAllParams } = useQueryParams();
  const [searchParams] = useSearchParams();

  const params = useMemo(() => getAllParams(), [searchParams]);

  const { page, perPage } = params;

  useEffect(() => {
    if (!page && !perPage) {
      setParam("page", 1);
      setParam("perPage", PER_PAGE);
    }
  }, [page, perPage]);

  useEffect(() => {
    if (page && perPage) {
      dispatch(fetchCatalog(params));
    }
  }, [params]);

  return (
    <ContentMarkup
      aside={<SearchForm />}
      content={
        <>
          {!loading && <CatalogList catalog={catalog} />}
          <Loader loading={loading} />
          {totalItems !== 0 && page < totalItems / perPage && <LoadMoreBtn />}
        </>
      }
    />
  );
};

export default CatalogPage;
