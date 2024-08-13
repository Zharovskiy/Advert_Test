import ModalReact from "react-modal";
import { useEffect } from "react";
import sprite from "../../assets/icons/sprite.svg";

import css from "./Modal.module.css";

const Modal = ({ isOpen, closeModal, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <ModalReact
      isOpen={isOpen}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      closeTimeoutMS={300}
      onRequestClose={() => closeModal()}
      ariaHideApp={false}
    >
      <button className={css.closeBtn} onClick={() => closeModal()}>
        <svg className={css.closeIcon} width="16" height="16">
          <use href={`${sprite}#icon-close`} />
        </svg>
      </button>
      <div className={css.modalContent}>{children}</div>
    </ModalReact>
  );
};

export default Modal;
