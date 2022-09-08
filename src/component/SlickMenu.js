import React from 'react';
import Slider from "react-slick";

export const SlickMenu = ({ menu }) => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className='next-arrow'
                onClick={onClick}>
                <i className="fas fa-chevron-right"></i>
            </button>
        );
    }
    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <button className='prev-arrow'
                onClick={onClick}>
                < i class="fas fa-chevron-left" ></i >
            </button >
        );
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        variableWidth: true,
        slidesToScroll: 3,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (

        <>

            <div style={{
                backgroundColor: "#f3f4f6",
            }}>
                <div className='container '
                    style={{
                        paddingTop: "80px",
                        height: "340px"
                    }}>

                    <Slider {...settings} >
                        <div className='slick-container-card' >
                            <img className="img-fluid slick-card" src="./img/slick-card/1-betel-nut.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                {menu[0]}
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/slick-card/2-cinamond.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                {menu[1]}
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/slick-card/3-cloves.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                {menu[2]}
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/slick-card/5-curcuma.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                {menu[3]}
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/slick-card/4-galangal.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                {menu[4]}
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/slick-card/5-curcuma.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                {menu[5]}
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/slick-card/7-tumeric.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                {menu[6]}
                            </div>
                        </div>

                    </Slider>

                </div>
            </div>

        </>





    )
}
