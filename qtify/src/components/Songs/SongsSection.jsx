import { useEffect, useState } from 'react';
import axios from 'axios';
import SongTabs from '../Songstabs/SongTabs';
import Sectionheader from '../SectionHeader/Sectionheader';
import { Box, CircularProgress } from '@mui/material';
import './SongsSection.css';
const SongsSection = () => {
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/songs';

  const [allSongs, setAllsongs] = useState(null); // Initialize as null
  const [allSongsLoader, setAllSongsLoader] = useState(false);

  useEffect(() => {
    const onLoadHandler = async () => {
      await performApiCall();
    };
    onLoadHandler();
  }, []);

  const performApiCall = async () => {
    setAllSongsLoader(true);
    try {
      const response = await axios.get(API_ENDPOINT);
      setAllSongsLoader(false);
      setAllsongs(response.data); // Update with the actual data
    } catch (error) {
      setAllSongsLoader(false);
      console.error('error in fetching data', error);
    }
  };
  //console.log(allSongs);

  return (
    <div>
      <Sectionheader sectionName={'Songs'} />
      {/* Conditional rendering for Section component */}
      {allSongsLoader ? (
        <Box className="loading">
          <CircularProgress sx={{ color: '#34C94B' }} />
          <p class="loadingText">Loading...</p>
        </Box>
      ) : (
        <>
          {allSongs ? (
            <SongTabs allsongsData={allSongs} IsAlbum={false}/>
            // <Section sectionData={allSongs} />
          ) : (
            <p>No Songs Available</p>
          )}
        </>
      )}
    </div>
  );
};

export default SongsSection;
