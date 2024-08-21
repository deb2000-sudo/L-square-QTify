import { CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FollowChip from '../Followchip/FollowChip';
import styles from './Mcard.module.css';
import cardImage from '../../assets/albumImg.png';
import { CardActions } from '@mui/material';

const Mcard = () => {
  return (
    <div className={styles.cardContainer}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={cardImage}
            alt="card-image"
          />
        </CardActionArea>
        <CardActions>
          <FollowChip />
        </CardActions>
      </Card>
      <div className={styles.cardName}>
        <Typography variant="body2"  >
          New Bollywood
        </Typography>
      </div>
    </div>
  );
};

export default Mcard;
