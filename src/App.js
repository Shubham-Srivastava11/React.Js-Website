import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import TopCards from './components/TopCards/TopCards';
import AboutUs from './components/AboutUs/AboutUs';
import Separator from './components/AboutUs/Separator';
import Services from './components/Services/Services';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <TopCards></TopCards>
      <AboutUs></AboutUs>
      <Separator></Separator>
      <Services></Services>
    </div>
  );
}

export default App;
