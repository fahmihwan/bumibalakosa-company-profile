import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";


const About = ({ about_us }) => {

    useEffect(() => {
        AOS.init({ duration: 900 });
        AOS.refresh();
    }, []);


    return (
        <div className='container-fluid mt-5' id='web-about' style={{
            overflow: "hidden",
        }}>
            <div id='id-about-us' className='mb-3'></div>
            <div className='container' id='id-tentang-kami'>
                <div className='row'   >
                    <div className='col-md-7 d-flex align-items-center ' >
                        <article style={{
                            textAlign: "justify",
                        }} data-aos="fade-right">
                            <h2 className=''>{about_us.title}</h2>
                            {/* Bumi is company founded on the awareness of the high potential of natural resources around us, and the desire and willingness to contribute to the welfare of local farmers.
                            Seeing the huge potential of our region, we chose to concentrate on the spices available in Indonesia and finally take this commodity to the next level. We are here to increase the demand for quality spice products at affordable prices for farmers and present all over the world. We firmly believe, with increasing demand and support for empowerment from us, the welfare of local farmers will increase. */}
                            {about_us.description}
                        </article>

                    </div>
                    <div className='col-md-5' >
                        <img data-aos="fade-left" src={'./img/other-img/undraw-about2.jpg'} alt="" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>


    )
}

export default About