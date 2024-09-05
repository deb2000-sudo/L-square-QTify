import { useEffect, useState } from 'react';
import axios from 'axios';
import Sectionheader from '../SectionHeader/Sectionheader';
import Section from '../Section/Section';

const Topalbum = () => {
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/albums/top';
  
  const [topalbums, setTopalbums] = useState(null); // Initialize as null
  const [topalbumLoader, setTopAlbumLoader] = useState(false);

  useEffect(() => {
    const onLoadHandler = async () => {
      const topalbumData = await performApiCall();
    };
    onLoadHandler();
  }, []);

  const performApiCall = async () => {
    setTopAlbumLoader(true);
    try {
      const response = await axios.get(API_ENDPOINT);
      setTopAlbumLoader(false);
      setTopalbums(response.data); // Update with the actual data
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
        <p>Loading...</p> // Show a loader or loading text
      ) : (
        topalbums && <Section topalbums={topalbums} /> // Render only if topalbums has data
      )}
    </div>
  );
};

export default Topalbum;
