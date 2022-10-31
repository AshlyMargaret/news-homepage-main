import './App.css';
import Bannerr from './Components/Bannerr/Bannerr';
import Header from './Components/Header/Header';
import RowPost from './Components/RowPost/RowPost';
import RetroImage from  './images/image-retro-pcs.jpg'
import KeyboardImage from './images/image-top-laptops.jpg'
import GamingImage from './images/image-gaming-growth.jpg'

function App() {
  return (
    <div className="App">
      <div className="navBar">
      <Header/>
      </div>
      <div className="mainBanner">
       <Bannerr/>
      </div>
      <div className="row">
        <RowPost img={RetroImage} heading="01" title=" Reviving Retro PCs" para="What happens when old PCs are given modern upgrades?"/>
        <RowPost img={KeyboardImage} heading="02" title="Top 10 Laptops of 2022" para="Our best picks for various needs and budgets."/>
        <RowPost img={GamingImage} heading="03" title="The Growth of Gaming" para="How the pandemic has sparked fresh opportunities."/>
      </div>
    
      
    </div>
  );
}

export default App;
