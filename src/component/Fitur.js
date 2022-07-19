import React from 'react'

const Fitur = () => {

    const cards = {
        width: '300px',
        margin: "10px",
    }
    return (

        <div style={{
            backgroundImage: "url('./img/other-img/wave.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed"
        }}>
            <div className='container' style={{
                paddingTop: "120px"
            }}>
                <h2 className='text-center'>Fitur Utama Kami</h2>
                <div className='row flex-wrap'>
                    <div className='card-keyframe-animation  ' >
                        <div className='card-fitur bg-info' style={{
                            ...cards,
                            backgroundImage: "linear-gradient(120deg, #f6d365 0%, #fda085 100%)"
                        }} >
                            <div className='card-none-hover text-center'>
                                <div className='bg-warning fitur-icon '>
                                    <img src="./img/fitur/integrity.png" alt="" style={{ width: "120px" }} />
                                </div>
                                <br />
                                <b className='text-center'>INTEGRITAS</b>
                            </div>
                            <div className='card-block-hover text-center'>
                                <article className='text-center'>
                                    Mengatakan kebenaran, dan memperlakukan orang lain dengan adil dan hormat. Integritas adalah salah satu aset kita yang paling berharga. Itu tidak boleh dikompromikan.
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='card-keyframe-animation ' >
                        <div className='card-fitur bg-warning' style={{
                            ...cards,
                            backgroundImage: "linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"
                        }} >
                            <div className='card-none-hover text-center'>
                                <div className='bg-warning fitur-icon'>
                                    <img src="./img/fitur/quality.png" alt="" style={{ width: "100px" }} />
                                </div>
                                <br />
                                <b className='text-center'>KUALITAS</b>
                            </div>
                            <div className='card-block-hover text-center'>
                                <article className='text-center'>
                                    Kualitas ditunjukkan dalam banyak cara dengan menjual dan mendukung produk dan layanan yang menyenangkan pelanggan, membangun lingkungan kerja, memberikan hasil keuangan yang memenuhi harapan investor.
                                </article>
                            </div>
                        </div>
                    </div>
                    <div className='card-keyframe-animation ' >
                        <div className='card-fitur ' style={{
                            ...cards,
                            backgroundImage: "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)"
                        }}>
                            <div className='card-none-hover text-center'>
                                <div className='bg-warning fitur-icon'>
                                    <img src="./img/fitur/commitment.png" alt="" style={{ width: "120px" }} />
                                </div>
                                <br />
                                <b className='text-center '>KOMITMEN</b>
                            </div>
                            <div className='card-block-hover text-center'>
                                <article className='text-center'>
                                    Komitmen itu penting dimana kami akan terus memberikan yang terbaik kepada pelanggan dan investor kami sepanjang waktu.
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>


    )

}



export default Fitur