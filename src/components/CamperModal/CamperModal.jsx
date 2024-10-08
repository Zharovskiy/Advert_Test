import { useState } from "react";
import Modal from "../Modal/Modal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectCamperModal } from "../../redux/modal/selectors.js";
import { modalState } from "../../redux/modal/slice.js";
import { truncateText } from "../../utils/stringUtils.js";
import { averageScore } from "../../utils/rating.js";
import clsx from "clsx";
import sprite from "../../assets/icons/sprite.svg";

import CamperFeatures from "../CamperFeatures/CamperFeatures.jsx";
import CamperReviews from "../CamperReviews/CamperReviews.jsx";

import css from "./CamperModal.module.css";

const CamperModal = () => {
  const dispatch = useDispatch();
  const item = useSelector(selectCamperModal);
  const [bottomInfo, setBottomInfo] = useState("features");

  if (!item) return null;
  const { name, gallery, price, reviews, location, description } = item;

  const closeModal = () => {
    setBottomInfo("features");
    dispatch(modalState(null));
  };

  return (
    <Modal isOpen={Boolean(item)} closeModal={closeModal}>
      <div className={css.content}>
        <div className={css.topBox}>
          <h4 className={css.name}>{truncateText(name, 30)}</h4>
          <div className={css.reviewsAndPriceBox}>
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
            <p className={css.price}>{`€${price},00`}</p>
          </div>
        </div>
        <div className={css.imgBox}>
          <img
            className={css.img}
            src={gallery[0]}
            alt={name}
            width="290px"
            height="310px"
          />
          <img
            className={css.img}
            src={gallery[1]}
            alt={name}
            width="290px"
            height="310px"
          />
          <img
            className={css.img}
            src={gallery[2]}
            alt={name}
            width="290px"
            height="310px"
          />
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.bottomBox}>
          <button
            className={clsx(css.bottomBtn, {
              [css.active]: bottomInfo === "features",
            })}
            onClick={() => {
              setBottomInfo("features");
            }}
          >
            Features
          </button>
          <button
            className={clsx(css.bottomBtn, {
              [css.active]: bottomInfo === "reviews",
            })}
            onClick={() => {
              setBottomInfo("reviews");
            }}
          >
            Reviews
          </button>
        </div>
        {bottomInfo && bottomInfo === "features" && <CamperFeatures />}
        {bottomInfo && bottomInfo === "reviews" && <CamperReviews />}
      </div>
    </Modal>
  );
};

export default CamperModal;
