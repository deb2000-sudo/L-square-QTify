import Chip from '@mui/material/Chip';
import styles from './FollowChip.module.css';

const FollowChip=({followdata})=>{
    console.log(followdata)
    return(
        <Chip label={`${followdata} Follows`} className={styles.ChipContainer}/>
    )
};

export default FollowChip;