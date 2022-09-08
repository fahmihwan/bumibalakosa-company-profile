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
import FooterContact from './component/FooterContact';
import { useRef, useState } from 'react';

import data from "./component/data.json"



function App() {
  const [language, setLanguage] = useState(data.language[1])

  const section1Ref = useRef();
  const section2Ref = useRef();
  const section3Ref = useRef();
  const section4Ref = useRef();


  return (
    <>
      <HeaderContact topContact={language.topContact} />
      <Navigation language={language} setLanguage={setLanguage}
        section1={section1Ref}
        section2={section2Ref}
        section3={section3Ref}
        section4={section4Ref}
      />

      <Header tagline={language.tagline}
        contact_us={language.contact_us} />
      < SlickMenu menu={language.slick_menu} />


      {/* fitur */}
      <section ref={section1Ref}>
        <Fitur
          title={language.our_key_features[0]}
          integrity={language.our_key_features[1]}
          quality={language.our_key_features[2]}
          commitment={language.our_key_features[3]}
        />
      </section>

      <div className='pt-4' style={{
      }}>
        {/* about */}
        <section ref={section2Ref}>
          <About about_us={language.about_us} />
        </section>
      </div>



      <div style={{
        backgroundImage: "url('./img/other-img/bg-circle.png')",
        marginBottom: "100px"
      }}>
        {/* produk */}
        <section ref={section3Ref}>
          <ProdukDetails our_product={language.our_product} language={language.language} />
        </section>

      </div>
      <ScrollTop />
      <div className='py-4 ' style={{
        backgroundImage: "url('./img/other-img/wave2.jpg')",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#f3f4f6",
        color: "white"
      }}>


        <section ref={section4Ref}>
          <VisiMisi title={language.our_team[0].title} social_media={language.our_team[1].social_media} />
        </section>
        <FooterContact
          contact_us={language.contact_us}
          title={language.our_team[2].title}
          name={language.our_team[2].name}
          email={language.our_team[2].email}
          message={language.our_team[2].message}
        />
        <Footer />
      </div>
    </>


  )



}

export default App;
