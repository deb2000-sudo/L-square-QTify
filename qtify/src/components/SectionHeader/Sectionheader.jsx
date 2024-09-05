import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './Sectionheader.module.css';

const Sectionheader = ({sectionName}) => {
  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.topAlbumContainer}>
        <Typography className={styles.heading}>{sectionName}</Typography>
        <Button variant="text" className={styles.headingbtn}>Show All</Button>
      </Box>
    </Box>
  );
};

export default Sectionheader;
