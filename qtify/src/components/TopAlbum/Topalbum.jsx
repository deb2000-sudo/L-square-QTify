import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Box} from '@mui/material';
import Sectionheader from '../SectionHeader/Sectionheader';
import Section from '../Section/Section';
import './Topalbum.css';
const Topalbum = () => {
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/albums/top';

  const [topalbums, setTopalbums] = useState(null); // Initialize as null
  const [topalbumLoader, setTopAlbumLoader] = useState(false);

  useEffect(() => {
    const onLoadHandler = async () => {
      await performApiCall();
      //console.log(topalbumData);
    };
    onLoadHandler();
  }, []);

  const performApiCall = async () => {
    setTopAlbumLoader(true);
    try {
      const response = await axios.get(API_ENDPOINT);
      setTopAlbumLoader(false);
      setTopalbums(response.data); // Update with the actual data
      console.log(response.data);
    } catch (error) {
      setTopAlbumLoader(false);
      console.error('error in fetching data', error);
    }
  };

  return (
    <div>
      <Sectionheader sectionName={'Top Albums'} />
      {/* Conditional rendering for Section component */}
      {topalbumLoader ? (
        <Box className="loading">
          <CircularProgress sx={{ color: '#34C94B' }} />
          <p className="loadingColor">Loading...</p>
        </Box>
      ) : (
        <>
          {topalbums ? (
            <Section sectionData={topalbums} IsAlbum={true} />
          ) : (
            <p>No Albums Available</p>
          )}
        </>
      )}
    </div>
  );
};

export default Topalbum;
