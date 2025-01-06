import { Box } from '@mui/material/';
import Carousel from '../Carousel/Carousel';
import styles from './Section.module.css';
const Section = ({sectionData,IsAlbum}) => {
  //console.log(sectionData)
  return (
    <Box className={styles.section}>
      <Carousel CarouselData={sectionData} IsAlbum={IsAlbum}/>
    </Box>
  );
};
export default Section;
