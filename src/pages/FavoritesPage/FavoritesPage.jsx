import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

import CatalogList from "../../components/CatalogList/CatalogList";
import OrderForm from "../../components/OrderForm/OrderForm";

import css from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);
  return (
    <div className={css.container}>
      <aside className={css.sideBox}>
        <OrderForm />
      </aside>
      <section className={css.content}>
        {favorites.length !== 0 ? (
          <CatalogList data={favorites} />
        ) : (
          <b className={css.notCatalog}>
            You haven't added anything to your favorites yet
          </b>
        )}
      </section>
    </div>
  );
};

export default FavoritesPage;
