import { useEffect, useState } from 'react';
import axios from 'axios';
import Sectionheader from '../SectionHeader/Sectionheader';
import Section from '../Section/Section';

const SongsSection = () => {
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/songs';

  const [allSongs, setAllsongs] = useState(null); // Initialize as null
  const [allSongsLoader, setAllSongsLoader] = useState(false);

  useEffect(() => {
    const onLoadHandler = async () => {
      const allsongdata = await performApiCall();
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
  console.log(allSongs);

  return (
    <div>
      <Sectionheader sectionName={'Songs'} />
      {/* Conditional rendering for Section component */}
      {allSongsLoader ? (
        <p>Loading...</p> // Show a loader or loading text
      ) : (
        allSongs && <Section topalbums={allSongs} /> // Render only if topalbums has data
      )}
    </div>
  );
};

export default SongsSection;
