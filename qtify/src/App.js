// import Header from './components/Header';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Hero/Herosection';
import MCard from './components/Card/Mcard';
import Section from './components/Section/Section';
import Sectionheader from './components/SectionHeader/Sectionheader';

function App() {
  return (
    <div className="App">
      {/* <Header/> */}
      <Navbar/>
      <Herosection/>
      <Sectionheader/>
      <Section/>
      {/* <Sectionheader/>
      <Section/> */}
    </div>
  );
}

export default App;
