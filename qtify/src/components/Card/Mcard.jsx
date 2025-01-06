import { CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FollowChip from '../Followchip/FollowChip';
import styles from './Mcard.module.css';
import { CardActions } from '@mui/material';

const Mcard = ({cardData,IsAlbum}) => {
  // console.log(cardData["follows"],typeof(cardData["follows"]));
  let followData=null,likeData=null;
  if(IsAlbum){
    followData=cardData["follows"];
  }else{
    likeData=cardData["likes"];
  }
  
  
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
          {IsAlbum?(<FollowChip followdata={followData} IsAlbum={IsAlbum}/>):(<FollowChip followdata={likeData} IsAlbum={IsAlbum} />)}
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
