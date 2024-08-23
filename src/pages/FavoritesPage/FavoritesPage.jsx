import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

import ContentMarkup from "../../components/ContentMarkup/ContentMarkup";
import CatalogList from "../../components/CatalogList/CatalogList";
import OrderForm from "../../components/OrderForm/OrderForm";

import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <ContentMarkup
      aside={<OrderForm />}
      content={
        <>
          {favorites.length !== 0 ? (
            <CatalogList data={favorites} />
          ) : (
            <b className={css.notCatalog}>
              You haven't added anything to your favorites yet
            </b>
          )}
        </>
      }
    />
  );
};

export default FavoritesPage;
