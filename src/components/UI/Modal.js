import React, { Fragment } from "react";
import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

const ModalBackdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};
const Modal = (props) => {
  const overlay = document.getElementById("modal");
  return (
    <Fragment>
      {createPortal(<ModalBackdrop onClose={props.onClose} />, overlay)}
      {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, overlay)}
    </Fragment>
  );
};

export default Modal;
