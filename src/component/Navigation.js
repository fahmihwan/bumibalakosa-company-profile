import React from 'react'

export const Navigation = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-light " style={{
            backgroundColor: "white"
        }}>
            <div className="container-fluid">
                <div className='px-5'>
                    <img src={'./img/logo.png'} alt="" style={{ width: "80px" }} className=" " />
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>

                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#id-tentang-kami">Tentang Kami</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#id-fitur-utama-kami">Fitur Utama Kami</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#id-fitur-utama-kami">Daftar Produk</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " aria-current="page" href="#id-fitur-utama-kami">Tim Kami</a>
                        </li>

                    </ul>

                    <ul className="navbar-nav">
                        <li className="nav-item dropdown float-end">

                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src={'./img/language/indonesia.png'} alt="" style={{ width: "20px" }} />  Bahasa
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Indonesia</a></li>
                                <li><a className="dropdown-item" href="#">Inggris</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}
