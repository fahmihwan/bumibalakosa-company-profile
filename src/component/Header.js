import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

export const Header = ({ tagline, contact_us }) => {


    useEffect(() => {
        AOS.init({ duration: 2000 });
        AOS.refresh();
    }, []);

    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='bg-header d-flex justify-content-center align-items-center '>
                        <div className='bg-header-img'>
                        </div>
                        <div className='bg-header-text text-center ' data-aos="fade-up">
                            <h5>PT. BUMI BALAKOSA BAYANAKA (B3) </h5>
                            {/* <p>Indonesian’s Finest spice  Commodity </p> */}
                            <p>{tagline}</p>
                            <a href="https://api.whatsapp.com/send/?phone=6285158725883&text&type=phone_number&app_absent=0" className='css-button-arrow--yellow' style={{ textDecoration: "none" }}>
                                {contact_us} <i className="ms-2 fab fa-whatsapp"> </i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
