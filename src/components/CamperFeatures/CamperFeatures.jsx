import { useSelector } from "react-redux";
import { selectCamperModal } from "../../redux/modal/selectors.js";
import { capitalizeFirstLetter } from "../../utils/stringUtils.js";
import sprite from "../../assets/icons/sprite.svg";

import OrderForm from "../OrderForm/OrderForm.jsx";

import css from "./CamperFeatures.module.css";

const CamperFeatures = () => {
  const item = useSelector(selectCamperModal);
  const {
    adults,
    transmission,
    engine,
    details,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = item;

  return (
    <div className={css.box}>
      <div className={css.leftBox}>
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
            <p className={css.detailsText}>{transmission}</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-petrol`} />
            </svg>
            <p className={css.detailsText}>{engine}</p>
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
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-conditioner`} />
            </svg>
            <p
              className={css.detailsText}
            >{`${details.airConditioner} air conditioner`}</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-cd`} />
            </svg>
            <p className={css.detailsText}>CD</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-radio`} />
            </svg>
            <p className={css.detailsText}>Radio</p>
          </div>
          <div className={css.details}>
            <svg className={css.iconDetails}>
              <use href={`${sprite}#icon-painted-plate`} />
            </svg>
            <p className={css.detailsText}>{`${details.hob} hob`}</p>
          </div>
        </div>
        <div className={css.bottomBox}>
          <p className={css.text}>Vehicle details</p>
          <div className={css.line}></div>
          <div className={css.detail}>
            <div className={css.row}>
              <p className={css.detailText}>Form</p>
              <p className={css.detailText}>{capitalizeFirstLetter(form)}</p>
            </div>
            <div className={css.row}>
              <p className={css.detailText}>Length</p>
              <p className={css.detailText}>{length}</p>
            </div>
            <div className={css.row}>
              <p className={css.detailText}>Width</p>
              <p className={css.detailText}>{width}</p>
            </div>
            <div className={css.row}>
              <p className={css.detailText}>Height</p>
              <p className={css.detailText}>{height}</p>
            </div>
            <div className={css.row}>
              <p className={css.detailText}>Tank</p>
              <p className={css.detailText}>{tank}</p>
            </div>
            <div className={css.row}>
              <p className={css.detailText}>Consumption</p>
              <p className={css.detailText}>{consumption}</p>
            </div>
          </div>
        </div>
      </div>
      <OrderForm />
    </div>
  );
};

export default CamperFeatures;
