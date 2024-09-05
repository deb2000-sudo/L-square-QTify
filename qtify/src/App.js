// import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Hero/Herosection';
import MCard from './components/Card/Mcard';
import Section from './components/Section/Section';
import Sectionheader from './components/SectionHeader/Sectionheader';
import Topalbum from './components/TopAlbum/Topalbum';
import Newalbum from './components/NewAlbum/Newalbum';
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Topalbum/>
      <Newalbum/>
    </div>
  );
}

export default App;
