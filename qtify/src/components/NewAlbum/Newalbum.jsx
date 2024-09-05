import { useEffect, useState } from 'react';
import axios from 'axios';
import Sectionheader from '../SectionHeader/Sectionheader';
import Section from '../Section/Section';

const Newalbum = () => {
  const API_ENDPOINT = 'https://qtify-backend-labs.crio.do/albums/new';
  //useEffect is used to fetch the data
  //a state variable is require to store the data that we have fetched
  const [newalbums, setNewalbums] = useState(null);
  const [newAlbumLoader,setNewAlbumLoader]=useState(false);

  useEffect(() => {
    const onLoadHandler = async () => {
      const newalbumData = await performApiCall();
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
        <p>Loading...</p> // Show a loader or loading text
      ) : (
        newalbums && <Section topalbums={newalbums} /> // Render only if newpalbums has data
      )}
    </div>
  )
}
export default Newalbum;