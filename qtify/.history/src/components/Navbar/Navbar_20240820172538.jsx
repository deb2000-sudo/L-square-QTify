import React from "react";
import { Link } from "react-router-dom";
import NButton from "../MyButton/NButton";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

function Navbar({ searchData }) {
  return (
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
        Qtify
      </Link>
      <Search
        placeholder="Search a song of your choice"
        searchData={searchData}
      />
      <NButton>Give Feedback</NButton>
    </nav>
  );
}

export default Navbar;
