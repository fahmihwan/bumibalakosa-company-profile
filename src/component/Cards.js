import React, { useEffect } from 'react'




import AOS from "aos";
import "aos/dist/aos.css";
import ModalDetail from './ModalDetail';

const Cards = ({ data, language }) => {

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 100, });
        AOS.refresh();
    }, []);

    return (
        <>
            <div class="col d-flex justify-content-center" data-aos="fade-up" >
                <div className='card-items' >
                    <div className='card-item-detail'>
                        <div className='card-item-img'>
                            <img src={data.img} alt="" />
                        </div>
                        <p className='text-center'>{data.nama}</p>
                        <ModalDetail detailProduct={data} language={language} />
                    </div>
                </div>
            </div >
        </>

    )
}

export default Cards