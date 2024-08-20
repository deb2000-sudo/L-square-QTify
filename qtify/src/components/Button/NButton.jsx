import * as React from 'react';
import Button from '@mui/material/Button';
import styles from './NButton.module.css'

const NButton=()=>{
    return(
        <Button variant="contained" className={styles.NButton}>Give Feedback</Button>
    )
}

export default NButton;