import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCatalog,
  fetchCatalogTotal,
} from "../../redux/catalog/operations";
import {
  selectCatalog,
  selectCatalogTotal,
  selectLoading,
} from "../../redux/catalog/selectors";
import useQueryParams from "../../hooks/useQueryParams.js";
import { useSearchParams } from "react-router-dom";
import { perPage } from "../../const/const.js";

import ContentMarkup from "../../components/ContentMarkup/ContentMarkup.jsx";
import Loader from "../../components/Loader/Loader.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import CatalogList from "../../components/CatalogList/CatalogList";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const loading = useSelector(selectLoading);
  const totalItem = useSelector(selectCatalogTotal);
  const { setParam, getAllParams } = useQueryParams();
  const [searchParams] = useSearchParams();

  const params = useMemo(() => getAllParams(), [searchParams]);

  const { page, limit } = params;

  useEffect(() => {
    if (!page && !limit) {
      setParam("page", 1);
      setParam("limit", perPage);
    }
  }, [page, limit]);

  useEffect(() => {
    if (!totalItem) {
      dispatch(fetchCatalogTotal());
    }
  }, [totalItem]);

  useEffect(() => {
    if (page && limit) {
      dispatch(fetchCatalog(params));
    }
  }, [params]);

  return (
    <ContentMarkup
      aside={<SearchForm />}
      content={
        <>
          <CatalogList data={catalog} />
          <Loader loading={loading} />
          {totalItem !== 0 && page < totalItem / limit && <LoadMoreBtn />}
        </>
      }
    />
  );
};

export default CatalogPage;
