import { CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import FollowChip from '../Followchip/FollowChip';
import styles from './Mcard.module.css';
import { CardActions } from '@mui/material';

const Mcard = ({cardData}) => {
  // console.log(cardData["follows"],typeof(cardData["follows"]));
  const followData=cardData["follows"];
  return (
    <div className={styles.cardContainer}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            height="170"
            image={cardData["image"]}
            alt={cardData["slug"]}
          />
        </CardActionArea>
        <CardActions>
          <FollowChip followdata={followData}/>
        </CardActions>
      </Card>
      <div className={styles.cardName}>
        <Typography variant="body2"  >
          {cardData["title"]}
        </Typography>
      </div>
    </div>
  );
};

export default Mcard;
