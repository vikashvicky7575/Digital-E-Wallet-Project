import React from "react";
import { Routes, Route } from "react-router-dom";
import styles from "./AdminLayout.module.css";
import Navbar from "../Admin-Navbar/Navbar";
import Home from "../../../pages/Home";
import About from "../../../pages/About";

const AdminLayout = () => {
  return (
    <>
      <div className={styles.layout}>
        <Navbar />
        <div className={styles.mainContent}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
