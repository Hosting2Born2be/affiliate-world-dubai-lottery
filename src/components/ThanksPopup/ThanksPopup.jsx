import ThanksIcon from "@/icons/ThanksIcon";
import WhiteArrow from "@/icons/WhiteArrow";
import React from "react";
import styles from "./ThanksPopup.module.scss";
import CloseIcon from "@/icons/CloseIcon";

const ThanksPopup = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.thanksPopup} ${isOpen ? styles.open : ""}`}>
      <div className={styles.thanksPopupContent}>
        <button onClick={onClose} className={styles.closeIcon}>
          <CloseIcon />
        </button>
        <ThanksIcon />
        <h2>You're in! </h2>
        <p>
          Your form has been successfully submitted. You're now entered into the
          Clarity Global raffle—good luck! Winners will be announced at the
          event.
          <br />
          Stay tuned, and don't forget to join our Telegram channel for updates!
        </p>
        <a href="https://t.me/+yQGYniRsLHNiMDM8" target="_blank">
          Join Our Telegram <WhiteArrow />
        </a>
      </div>
    </div>
  );
};

export default ThanksPopup;
