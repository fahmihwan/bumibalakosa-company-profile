// import logo from './logo.svg';
import './App.css';
import About from './component/About';
import Footer from './component/Footer';

import { Navigation } from './component/Navigation';
import ProdukDetails from './component/ProdukDetails';
import ScrollTop from './component/ScrollTop';
import Fitur from './component/Fitur';
import { SlickMenu } from './component/SlickMenu';
import VisiMisi from './component/VisiMisi';
import HeaderContact from './component/HeaderContact';
import { Header } from './component/Header';



function App() {
  return (
    <>
      <HeaderContact />
      <Navigation />
      <Header />

      <SlickMenu />
      <Fitur />
      <div className='pt-4' style={{
      }}>
        <About />
      </div>
      <div style={{
        backgroundImage: "url('./img/other-img/bg-circle.png')",
        marginBottom: "100px"
      }}>
        <ProdukDetails />
      </div>
      <ScrollTop />
      <div className='py-4 ' style={{
        backgroundImage: "url('./img/other-img/Sprinkle.jpg')",
        height: "100%",
        color: "white"
      }}>
        <VisiMisi />
        <Footer />
      </div>
    </>


  )



}

export default App;
