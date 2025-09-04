import React from "react";
import styles from "./SignIn.module.css";
import { IoMdArrowBack } from "react-icons/io";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={styles.signinContainer}>
      {/* Sign In Head */}
      <div className={`d-flex align-items-center ${styles.signinHead}`}>
        {/* Left arrow */}
        <IoMdArrowBack className={styles.arrowIcon} />

        {/* Center text */}
        <h1 className="flex-grow-1 text-center m-0">SignIn</h1>
      </div>
      {/* Content Text */}
      <div className={`mt-5 ${styles.content_Container} `}>
        <h2>
          <strong className={`${styles.logoText}`}>Safe</strong>Pay
        </h2>
        <h6 className="text-secondary fw-normal">
          Give credential to signin your account{" "}
        </h6>
      </div>
      {/* Form Input Block */}
      <form>
        <div className={`${styles.inputBlock}`}>
          {/* Email Block */}
          <div className={`mb-3 ${styles.email_Block}`}>
            <label htmlFor="email" className="form-label fw-normal">
              Email
            </label>
            <input
              type="text"
              className={`form-control ${styles.email_Input}`}
              placeholder="Enter Your Email"
            />
          </div>

          {/* Password */}
          <div className={`${styles.password_Block}`}>
            <label htmlFor="password" className="form-label fw-normal">
              Password
            </label>
            <input
              type="text"
              className={`form-control ${styles.password_Input}`}
              placeholder="Enter Your Password"
            />
          </div>

          {/* Forget Password */}

          <Link
            to="/"
            className={`d-block text-end text-decoration-none mt-2 ${styles.forget_Text}`}
          >
            Forgot Password ?
          </Link>
        </div>
      </form>
      {/* submit Button Block */}
      <div
        className={`d-flex justify-content-center mt-3 ${styles.SubmitButtonBlock}`}
      >
        <button className={`${styles.buttonText}`}>SignIn</button>
      </div>
      {/* Border line */}
      <div className="d-flex align-items-center my-4">
        <hr className="flex-grow-1" />
        <h6 className="text-secondary mx-2 mb-0">Or Continue with</h6>
        <hr className="flex-grow-1" />
      </div>
      {/* Social Media Block */}
      <div className={`${styles.Social_Block}`}>
        <div className="row">
          <div className="col-6 d-flex border border-1 rounded-2 justify-content-center ">
            <div className="d-flex align-items-center">
              <FaGoogle className="fs-2" />
            </div>

            <h5 className="m-0">Google</h5>
          </div>

          <div className="col-6 d-flex border border-1 rounded-2 justify-content-center">
            <div className="d-flex align-items-center">
              <FaApple className="fs-1" />
            </div>

            <h5 className="m-0">Apple</h5>
          </div>
        </div>
      </div>
      {/* don't  have an account line*/}'
      <h6 className={`text-secondary text-center ${styles.signupBlock}`}>
        Don't have an account <Link to='./signup' className={`${styles.signupText}`}>Sign Up</Link>
      </h6>
    </div>
  );
};

export default SignIn;
