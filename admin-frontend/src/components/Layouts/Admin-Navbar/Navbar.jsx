import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      {/* TopNavbar Start */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark bg-dark fixed-top ${styles.navbar}`}
      >
        <div className="container-fluid">
          {/* SideBar Mobile Toggle */}
          <button
            className="btn btn-outline-light d-lg-none me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebar"
          ></button>

          <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
            Wallet Admin
          </Link>

          <ul className="navbar-nav ms-auto align-items-center"></ul>
        </div>
      </nav>
      {/* TopNavbar End */}

      {/* SideNavbar Start */}
      <div className={`d-flex flex-column bg-dark ${styles.sidebar}`}>
        <NavLink
          to="/admin/home"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/admin/about"
          className={({ isActive }) =>
            isActive ? `${styles.active} ${styles.navLink}` : styles.navLink
          }
        >
          User Manage
        </NavLink>

        <div className="dropdown">
          <button
            className={`btn dropdown-toggle text-start ${styles.navLink}`}
          >
            User Management
          </button>
          <ul className="dropdown-menu">
            <li>
              <NavLink className="dropdown-item" to="">
                verify
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* SideNavbar End */}
    </>
  );
};
export default Navbar;
