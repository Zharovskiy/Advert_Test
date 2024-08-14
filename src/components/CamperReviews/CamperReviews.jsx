import { useSelector } from "react-redux";
import { selectCamperModal } from "../../redux/modal/selectors.js";
import { getFirstCapitalLetter } from "../../utils/stringUtils.js";

import OrderForm from "../OrderForm/OrderForm.jsx";
import Rating from "../Rating/Rating.jsx";

import css from "./CamperReviews.module.css";

const CamperReviews = () => {
  const { reviews } = useSelector(selectCamperModal);

  return (
    <div className={css.box}>
      <div className={css.leftBox}>
        <div className={css.commentBox}>
          <div className={css.commentTop}>
            <div className={css.avatar}>
              {getFirstCapitalLetter(reviews[0].reviewer_name)}
            </div>
            <div className={css.nameAndRatingBox}>
              <p className={css.name}>{reviews[0].reviewer_name}</p>
              <Rating score={reviews[0].reviewer_rating} />
            </div>
          </div>
          <p className={css.commentText}>{reviews[0].comment}</p>
        </div>
        <div className={css.commentBox}>
          <div className={css.commentTop}>
            <div className={css.avatar}>
              {getFirstCapitalLetter(reviews[1].reviewer_name)}
            </div>
            <div className={css.nameAndRatingBox}>
              <p className={css.name}>{reviews[1].reviewer_name}</p>
              <Rating score={reviews[1].reviewer_rating} />
            </div>
          </div>
          <p className={css.commentText}>{reviews[1].comment}</p>
        </div>
      </div>
      <OrderForm />
    </div>
  );
};

export default CamperReviews;
