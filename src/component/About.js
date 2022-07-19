import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";


const About = () => {

    useEffect(() => {
        AOS.init({ duration: 900 });
        AOS.refresh();
    }, []);


    return (
        <div className='container-fluid mt-5' id='web-about' style={{
            overflow: "hidden",
        }}>
            <div id='id-tentang-kami' className='mb-3'></div>
            <div className='container' id='id-tentang-kami'>
                <div className='row'   >
                    <div className='col-md-7 d-flex align-items-center ' >
                        <article style={{
                            textAlign: "justify",
                        }} data-aos="fade-right">
                            <h2 className=''>Tentang Kami</h2>
                            Bumi adalah perusahaan yang didirikan atas kesadaran akan potensi sumber daya alam yang tinggi di sekitar kita, serta keinginan dan kemauan untuk berkontribusi pada kesejahteraan petani lokal. Melihat potensi daerah kami yang sangat besar, kami memilih untuk berkonsentrasi pada rempah-rempah yang tersedia di Indonesia dan akhirnya membawa komoditas ini ke level berikutnya. Kami hadir untuk meningkatkan permintaan akan produk rempah yang berkualitas dengan harga yang terjangkau bagi petani dan hadir di seluruh dunia. Kami sangat yakin, dengan meningkatnya permintaan dan dukungan pemberdayaan dari kami, kesejahteraan petani lokal akan meningkat.
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