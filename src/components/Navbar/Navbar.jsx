import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { FaBars, FaX } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfolio
      </a>
      <div className={styles.menu}>
        <div className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaX /> : <FaBars />}
        </div>
        {/* <img
          className={styles.menuBtn}
          src={menuOpen ? <FaBars /> : <FaBars />}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        /> */}

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li className={styles.navlink}>
            <a href="#about">About</a>
          </li>
          <li className={styles.navlink}>
            <a href="#experience">Experience</a>
          </li>
          <li className={styles.navlink}>
            <a href="#projects">Projects</a>
          </li>
          <li className={styles.navlink}>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
