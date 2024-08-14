import { useDispatch, useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";
import { setFavoriteItems } from "../../redux/favorites/slice";
import { modalState } from "../../redux/modal/slice";
import { capitalizeFirstLetter, truncateText } from "../../utils/stringUtils";
import clsx from "clsx";
import sprite from "../../assets/icons/sprite.svg";

import css from "./CatalogItem.module.css";

const CatalogItem = ({ item }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  const {
    name,
    gallery,
    price,
    reviews,
    location,
    description,
    adults,
    transmission,
    engine,
    details,
  } = item;

  const averageScore = (reviews) => {
    if (reviews.length === 0) return 0;
    const totalScore = reviews.reduce((sum, review) => {
      return sum + review.reviewer_rating;
    }, 0);
    return totalScore / reviews.length;
  };

  const addToFavorites = (item) => {
    const isFavorite = favorites.some((fav_Item) => fav_Item._id === item._id);

    if (!isFavorite) {
      dispatch(setFavoriteItems([...favorites, item]));
    } else {
      dispatch(
        setFavoriteItems(
          favorites.filter((fav_Item) => fav_Item._id !== item._id)
        )
      );
    }
  };

  const openModal = (item) => {
    dispatch(modalState(item));
  };

  return (
    <>
      <img className={css.img} src={gallery[0]} alt={name} />
      <div className={css.content}>
        <div className={css.topBox}>
          <div className={css.nameAndPrice}>
            <h4 className={css.name}>{truncateText(name, 30)}</h4>
            <div className={css.priceAndFavor}>
              <p className={css.price}>{`€${price},00`}</p>
              <button
                className={css.btnHeart}
                onClick={() => addToFavorites(item)}
              >
                <svg
                  className={clsx(css.iconHeart, {
                    [css.active]: favorites.find(
                      (fav_Item) => fav_Item._id === item._id
                    ),
                  })}
                >
                  <use href={`${sprite}#icon-heart`} />
                </svg>
              </button>
            </div>
          </div>
          <div className={css.reviewsAndLocation}>
            <div className={css.reviews}>
              <svg className={css.iconStar}>
                <use href={`${sprite}#icon-star`} />
              </svg>
              <p className={css.reviewsText}>
                {`${averageScore(reviews)} (${reviews.length} Reviews)`}
              </p>
            </div>
            <div className={css.location}>
              <svg className={css.iconLocation}>
                <use href={`${sprite}#icon-location`} />
              </svg>
              <p className={css.locationText}>{location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{truncateText(description, 65)}</p>
        <div className={css.detailsBox}>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-adults`} />
            </svg>
            <p className={css.detailsText}>{`${adults} adults`}</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-transmission`} />
            </svg>
            <p className={css.detailsText}>
              {capitalizeFirstLetter(transmission)}
            </p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-petrol`} />
            </svg>
            <p className={css.detailsText}>{capitalizeFirstLetter(engine)}</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-kitchen`} />
            </svg>
            <p className={css.detailsText}>Kitchen</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-bads`} />
            </svg>
            <p className={css.detailsText}>{`${details.beds} Beds`}</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-ac`} />
            </svg>
            <p className={css.detailsText}>AC</p>
          </div>
        </div>
        <button
          className={css.btn}
          onClick={() => {
            openModal(item);
          }}
        >
          Show more
        </button>
      </div>
    </>
  );
};

export default CatalogItem;
