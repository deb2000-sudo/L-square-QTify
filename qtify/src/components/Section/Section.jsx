import { Grid, Box } from '@mui/material/';
import Mcard from '../Card/Mcard';
import styles from './Section.module.css';
const Section = () => {
  return (
    <Box className={styles.section}>
      <Grid container className={styles.sectionContainer} spacing={3}>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
        <Grid item xs={6} md={3} lg={1}>
          <Mcard />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Section;
