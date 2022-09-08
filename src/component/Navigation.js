import React, { useEffect, useRef, useState } from 'react'


import data from "./data.json"





export const Navigation = ({ language, setLanguage,
    section1,
    section2,
    section3,
    section4,
}) => {


    const [activeIndex, setActiveIndex] = useState(0);
    let link0 = useRef()
    let link1 = useRef()
    let link2 = useRef()
    let link3 = useRef()
    let link4 = useRef()




    useEffect(() => {
        let sec1 = section1.current
        let sec2 = section2.current
        let sec3 = section3.current
        let sec4 = section4.current

        document.addEventListener("scroll", function () {
            console.log(window.scrollY)

            if (window.scrollY <= 900) {
                link0.current.classList.add('active')
            } else {
                link0.current.classList.remove('active')
            }

            if (window.scrollY >= sec1.offsetTop - 1 && window.scrollY < sec1.offsetTop + sec1.offsetHeight) {
                link1.current.classList.add('active')
            } else {
                link1.current.classList.remove('active')
            }

            if (window.scrollY >= sec2.offsetTop - 1 && window.scrollY < sec2.offsetTop + sec2.offsetHeight) {
                link2.current.classList.add('active')
            } else {
                link2.current.classList.remove('active')
            }

            if (window.scrollY >= sec3.offsetTop - 1 && window.scrollY < sec3.offsetTop + sec3.offsetHeight) {
                link3.current.classList.add('active')
            } else {
                link3.current.classList.remove('active')
            }

            if (window.scrollY >= sec4.offsetTop - 1 && window.scrollY < sec4.offsetTop + sec4.offsetHeight) {
                link4.current.classList.add('active')
            } else {
                link4.current.classList.remove('active')
            }
        });



    }, [])



    function changeLanguage(bahasa) {
        if (bahasa === "indonesia") {
            setLanguage(data.language[0])
        }
        if (bahasa === "inggris") {
            setLanguage(data.language[1])
        }
    }



    return (

        <nav className="navbar navbar-expand-lg navbar-light " style={{
            backgroundColor: "white"
        }}>
            <div className="container-fluid">
                <div className='ps-2 pe-5'>
                    <img src={'./img/logo.png'} alt="" style={{ width: "80px" }} className=" " />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link nap-link" ref={link0} aria-current="page" href="#">{language.navigation[0]}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nap-link " ref={link1} aria-current="page" href="#id-our-key-features">{language.navigation[1]}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nap-link" ref={link2} aria-current="page" href="#id-about-us">{language.navigation[2]}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nap-link" ref={link3} aria-current="page" href="#id-our-product">{language.navigation[3]}</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link nap-link" ref={link4} aria-current="page" href="#id-our-team">{language.navigation[4]}</a>
                        </li>

                    </ul>
                    {/* tes scroll */}


                    {/* tes scroll */}





                    <ul className="navbar-nav">
                        <li className="nav-item dropdown float-end">

                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={"./img/language/" + language.language + ".png"} alt="" style={{ width: "20px" }} />  {language.translate}
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <button className="dropdown-item" onClick={() => changeLanguage('inggris')}>Inggris</button>
                                    <button className="dropdown-item" onClick={() => changeLanguage('indonesia')}>Indonesia</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}
