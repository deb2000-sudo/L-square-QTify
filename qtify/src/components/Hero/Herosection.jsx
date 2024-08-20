import * as React from 'react';
import styles from './Herosection.module.css';
import { Box } from '@mui/material';

const Herosection = () => {
  return (
    <Box className={styles.heroContainer}>
      <Box className={styles.textHolder}>
        <Box className={styles.textContainer}>100 Thousands Songs,ad-free</Box>
        <Box className={styles.textContainer}>Over thousands podcast episodes</Box>
      </Box>
      <Box className={styles.imageContainer}></Box>
    </Box>
  );
};

export default Herosection;
