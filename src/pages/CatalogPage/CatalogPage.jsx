import { useEffect } from "react";
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
  const { getParam, setParam } = useQueryParams();
  const page = getParam("page");
  const limit = getParam("limit");

  useEffect(() => {
    if (!page && !limit) {
      setParam("page", 1);
      setParam("limit", perPage);
    }
  }, []);

  useEffect(() => {
    if (!totalItem) {
      dispatch(fetchCatalogTotal());
    }
  }, [totalItem]);

  useEffect(() => {
    if (page && limit) {
      dispatch(fetchCatalog({ page, limit }));
    }
  }, [page, limit]);

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
