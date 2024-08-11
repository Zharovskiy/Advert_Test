import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom";
import { fetchCatalog, fetchCatalogTotal } from "../../redux/catalog/operations";
import { selectCatalog, selectCatalogTotal, selectLoading } from "../../redux/catalog/selectors";

import CatalogList from "../../components/CatalogList/CatalogList";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadMoreBtn";
import Loader from "../../components/Loader/Loader.jsx";

import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);
  const loading = useSelector(selectLoading)
  const totalItem = useSelector(selectCatalogTotal)
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  const perPage = searchParams.get("limit");

  useEffect(() => {
    if (!totalItem) {
      dispatch(fetchCatalogTotal());
    }
  }, [totalItem])

  useEffect(() => {
    if (page && perPage) {
      dispatch(fetchCatalog({page, perPage}));
    }
  }, [page, perPage])

  return (
    <div className={css.container}>
      <aside className={css.sideBox}>
        <SearchForm />
      </aside>
      <section className={css.content}>
        <CatalogList data={catalog}/>
        <Loader loading={loading} />
        {totalItem !== 0 && page < totalItem/perPage && <LoadMoreBtn />}
      </section>
    </div>
  )
}

export default CatalogPage