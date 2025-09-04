import React from "react";
import styles from "./LoadingPage.module.css";

const LoadingPage = () => {
  return (
    <>
      <div className={`d-flex justify-content-center align-items-center vh-100 ${styles.loadingHead}`}>
        <h1 className={`text-white ${styles.logoName}`}>
          Safe Pay
        </h1>
      </div>
    </>
  );
};

export default LoadingPage;
