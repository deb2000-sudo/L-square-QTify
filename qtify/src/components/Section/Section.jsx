import { Grid, Box } from '@mui/material/';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';
const Section = (sectionData) => {
  console.log(sectionData)
  return (
    <Box className={styles.section}>
      <Carousel carouselData={sectionData}/>
    </Box>
  );
};
export default Section;
