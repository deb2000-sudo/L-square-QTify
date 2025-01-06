import React, { useEffect, useState } from 'react';
import { Tabs, Tab, Box, CircularProgress } from '@mui/material';
import CustomTabs from '../Customtabs/CustomTabs';
import axios from 'axios';
import Carousel from '../Carousel/Carousel';
import './SongsTabs.css';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SongTabs = ({ allsongsData, IsAlbum }) => {
  // State variables for genres and loading state
  const [genre, setGenre] = useState([]);
  const [genreLoader, setGenreLoader] = useState(false);
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/genres';
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const onLoadHandler = async () => {
      await performApiCall();
    };
    onLoadHandler();
  }, []);

  const performApiCall = async () => {
    setGenreLoader(true);
    try {
      const response = await axios.get(API_ENDPOINT);
      setGenre(response.data.data);
    } catch (error) {
      console.error('Error in fetching genres:', error);
    } finally {
      setGenreLoader(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        paddingLeft: '50px',
        backgroundColor: 'black',
      }}
    >
      {genreLoader ? (
        <Box className="loading">
          <CircularProgress sx={{ color: '#34C94B' }} />
          <p className="loadingColor">Loading...</p>
        </Box>
      ) : (
        <>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="song tabs example"
              textColor="inherit"
              indicatorColor="primary"
              TabIndicatorProps={{
                style: { backgroundColor: '#34C94B' },
              }}
            >
              <Tab
                label="All"
                {...a11yProps(0)}
                sx={{
                  color: value === 0 ? '#34C94B' : 'white',
                  fontWeight: 'bold',
                }}
              />
              {genre.map((item, index) => (
                <Tab
                  key={index}
                  label={item.label}
                  {...a11yProps(index + 1)}
                  sx={{
                    color: value === index + 1 ? '#34C94B' : 'white',
                    fontWeight: 'bold',
                  }}
                />
              ))}
            </Tabs>
          </Box>
          <CustomTabs value={value} index={0}>
            <Carousel CarouselData={allsongsData} IsAlbum={IsAlbum} />
          </CustomTabs>
          {genre.map((item, index) => (
            <CustomTabs key={index} value={value} index={index + 1}>
              <Carousel
                CarouselData={allsongsData.filter(
                  (song) => song.genre.label === item.label
                )}
              />
            </CustomTabs>
          ))}
        </>
      )}
    </Box>
  );
};

export default SongTabs;
