import React from "react";
import styles from "./Onboarding.module.css";
import wallet  from "../../../src/assets/wallet.png";

const Onboarding = () => {
  return (
    <div className={styles.container}>
      {/* Top Illustration */}
      <div className={styles.illustration}>
        <img src={wallet} alt="Wallet Illustration" className={styles.image} />
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <h2 className={styles.title}>Reach Financial Goal more Faster</h2>
        <p className={styles.subtitle}>
          Let’s transfer and receive your money with most easy and secure way
        </p>

        {/* Button */}
        <button className={styles.startBtn}>GET STARTED </button>
      </div>
    </div>
  );
};

export default Onboarding;
