import React from 'react';
import Slider from "react-slick";

export const SlickMenu = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
            <button
                className='next-arrow'
                onClick={onClick}>
                <i class="fas fa-chevron-right"></i>
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
                            <img className="img-fluid slick-card" src="./img/Betel-nut/3.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                Betel nut
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/Cinamond/5.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                Cinamond
                            </div>
                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/Cloves/1.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                Cloves
                            </div>

                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/Curcuma/2.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                Curcuma
                            </div>

                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/Galangal/1.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                Galangal
                            </div>

                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/Ginger/1.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                Ginger
                            </div>

                        </div>
                        <div className='slick-container-card'>
                            <img className="img-fluid slick-card" src="./img/Tumeric/1.png" alt="" style={{ width: "100%" }} />
                            <div className='slick-card-title py-2'>
                                Tumeric
                            </div>

                        </div>

                    </Slider>

                </div>
            </div>

        </>





    )
}
