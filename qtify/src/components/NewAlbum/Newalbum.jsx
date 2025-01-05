import { useEffect, useState } from 'react';
import axios from 'axios';
import Sectionheader from '../SectionHeader/Sectionheader';
import Section from '../Section/Section';
import {Box, CircularProgress} from '@mui/material'
import './Newalbum.css'
const Newalbum = () => {
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/albums/new';
  //useEffect is used to fetch the data
  //a state variable is require to store the data that we have fetched
  const [newalbums, setNewalbums] = useState(null);
  const [newAlbumLoader,setNewAlbumLoader]=useState(false);

  useEffect(() => {
    const onLoadHandler = async () => {
      await performApiCall();
    };
    onLoadHandler();
  }, []);

  const performApiCall = async () => {
    setNewAlbumLoader(true);
    try {
      const response = await axios.get(API_ENDPOINT);
      setNewAlbumLoader(false);
      setNewalbums(response.data); // Update with the actual data
    } catch (error) {
      setNewAlbumLoader(false);
      console.error('error in fetching data', error);
    }
  };
  return(
    <div>
        <Sectionheader sectionName={"New Albums"}/>
        {newAlbumLoader ? (
          <Box className="loading">
            <CircularProgress sx={{color:"#34C94B"}}/>
            <p className='loadingText'>Loading...</p>
          </Box>
      ) : (
        <>
          {newalbums ? (
            <Section sectionData={newalbums}/>
          ) : (
            <p>No  new Albums Available</p>
          )}
        </>
      )}
    </div>
  )
}
export default Newalbum;