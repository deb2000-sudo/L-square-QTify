import { Box, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import styles from './Sectionheader.module.css';

const Sectionheader = () => {
  return (
    <Box className={styles.headerContainer}>
      <Box className={styles.topAlbumContainer}>
        <Typography className={styles.heading}>Top Albums</Typography>
        <Button variant="text" className={styles.headingbtn}>Show All</Button>
      </Box>
    </Box>
  );
};

export default Sectionheader;
