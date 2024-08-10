import { useSelector } from "react-redux"
import { selectFavorites } from "../../redux/favorites/selectors";

import CatalogList from "../../components/CatalogList/CatalogList";

import css from "./FavoritesPage.module.css"

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <>
      {favorites.length !== 0 ? (
        <CatalogList data={favorites} />
      ) : (
        <b className={css.notCatalog}>
          You haven't added anything to your favorites yet
        </b>
      )}
    </>
  )
}

export default FavoritesPage