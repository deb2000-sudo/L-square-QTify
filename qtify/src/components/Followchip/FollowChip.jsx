import Chip from '@mui/material/Chip';
import styles from './FollowChip.module.css';

const FollowChip = ({ followdata, IsAlbum }) => {
    //console.log(followdata)
    return (
        IsAlbum ? (
            <Chip label={`${followdata} Follows`} className={styles.ChipContainer} />
        ) : (
            <Chip label={`${followdata} Likes`} className={styles.ChipContainer} />
        )
    );
};

export default FollowChip;
