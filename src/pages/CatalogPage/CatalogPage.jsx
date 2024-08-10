import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCatalog } from "../../redux/catalog/operations";
import { selectCatalog } from "../../redux/catalog/selectors";

import CatalogList from "../../components/CatalogList/CatalogList";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const catalog = useSelector(selectCatalog);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [])

  return (
    <CatalogList data={catalog}/>
  )
}

export default CatalogPage