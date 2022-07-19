import React from 'react'

const VisiMisi = () => {
    return (
        <div className='container-fluid mt-5' >
            <div className='row mb-5'>
                <h3 className='text-center'>Tim Kami</h3>
                <br />
            </div>
            <div className='row flex-wrap justify-content-evenly'>
                <div className='container-img-team'>
                    <img src="./img/mba-resma/resma1.jpg" className='img-fluid' alt="" />

                    {/* hover */}
                    <div className='detail-img-team'>
                        <div class="d-flex bd-highlight ">
                            <div class=" bd-highlight">
                                <div className='detail-icon-team'>
                                    <i class="fas fa-user"></i>
                                </div>
                            </div>
                            <div class=" bd-highlight text-dark">
                                Sri Widyastuti
                            </div>
                        </div>
                        <div class="mt-3 text-dark ">Founder</div>
                        <p className=' text-muted'>sosial media</p>
                        <a href="" className='text-decoration-none '>
                            <i class="fab fa-linkedin"></i> Resma
                        </a>
                        <br />
                        <a href="" className='text-decoration-none'>
                            <i class="fab fa-instagram-square"></i> Resma
                        </a>
                    </div>
                </div>
                <div className='container-img-team'>
                    <img src="./img/mba-resma/resma2.jpg" className='img-fluid' alt="" />

                    {/* hover */}
                    <div className='detail-img-team'>
                        <div class="d-flex bd-highlight ">
                            <div class=" bd-highlight">
                                <div className='detail-icon-team'>
                                    <i class="fas fa-user"></i>
                                </div>
                            </div>
                            <div class=" bd-highlight text-dark">
                                Resma Jauharotul Azizah
                            </div>
                        </div>
                        <div class="mt-3 text-dark">Co-Founder</div>
                        <p className='text-muted'>sosial media</p>
                        <a href="" className='text-decoration-none '>
                            <i class="fab fa-linkedin"></i> Resma
                        </a>
                        <br />
                        <a href="" className='text-decoration-none'>
                            <i class="fab fa-instagram-square"></i> Resma
                        </a>
                    </div>
                </div>


            </div>
        </div >
        // <div className='container-fluid py-4'>
        //     <div className='container'>
        //         <div className='row'>
        //             <h3 className='text-center'>Ourt Team</h3>
        //         </div>
        //         <div className='row d-flex flex-wrap justify-content-evenly '>
        //             <div className='resma-card'>
        //                 <div className='bg-resma-card'>
        //                     <div className='sosmed text-center'>
        //                         <h3>Resma</h3>

        //                         <a href="" className='text-decoration-none'>
        //                             <i class="fab fa-linkedin"></i> Resma
        //                         </a>
        //                         <br />
        //                         <a href="" className='text-decoration-none'>
        //                             <i class="fab fa-instagram-square"></i> Resma
        //                         </a>
        //                     </div>

        //                 </div>
        //                 <img src="./img/mba-resma/resma1.jpg" className='img-fluid' alt="" />
        //             </div>
        //             <div className='resma-card'>
        //                 <div className='bg-resma-card'>
        //                     <div className='sosmed text-center'>
        //                         <h3>Resma</h3>

        //                         <a href="" className='text-decoration-none'>
        //                             <i class="fab fa-linkedin"></i> Resma
        //                         </a>
        //                         <br />
        //                         <a href="" className='text-decoration-none'>
        //                             <i class="fab fa-instagram-square"></i> Resma
        //                         </a>
        //                     </div>

        //                 </div>
        //                 <img src="./img/mba-resma/resma2.jpg" className='img-fluid' alt="" />
        //             </div>



        //         </div>
        //     </div>
        //     <Footer />
        // </div>

    )
}

export default VisiMisi