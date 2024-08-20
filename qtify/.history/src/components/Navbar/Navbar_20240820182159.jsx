import React from "react";
import { Link } from "react-router-dom";
import NButton from "../Button/NButton";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";
import Box from '@mui'

function Navbar({ searchData }) {
  return (
    <Box>

    </Box>
    <nav className={styles.navbar}>
      <Link to="/">
        <Logo />
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
