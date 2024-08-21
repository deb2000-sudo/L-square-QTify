import Chip from '@mui/material/Chip';
import styles from './FollowChip.module.css';

const FollowChip=()=>{
    return(
        <Chip label="100 Follows" className={styles.ChipContainer}/>
    )
};

export default FollowChip;