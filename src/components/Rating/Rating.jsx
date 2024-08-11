import sprite from "../../assets/icons/sprite.svg";

import css from "./Rating.module.css";

const Rating = ({ score, maxScore = 5 }) => {
  const fullStars = Math.floor(score);
  
  return (
    <div className={css.rating}>
      {Array.from({ length: maxScore }, (_, index) => (
        <svg
          key={index}
          className={css.star}
          style={{ fill: index < fullStars ? "gold" : "gray" }}
        >
          <use href={`${sprite}#icon-star`} />
        </svg>
      ))}
    </div>
  );
};

export default Rating;
