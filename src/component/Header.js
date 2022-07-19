import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

export const Header = () => {


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
                            <p>Komoditas Rempah-rempah Terbaik Indonesia </p>
                            <button className='btn btn-warning'>Hubungi Kami
                                <i className="ms-2 fab fa-whatsapp"></i>
                            </button>
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />

                        </div>
                    </div>
                </div>
            </div>





        </>
    )
}
