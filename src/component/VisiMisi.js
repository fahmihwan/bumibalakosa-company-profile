import React from 'react'

const VisiMisi = ({ title, social_media }) => {
    return (
        <>
            <div id='id-our-team' className='mb-3'></div>
            <div className='container-fluid ' >
                <div className='row mb-5'>
                    <h3 className='text-center text-dark'>{title}</h3>
                    <br />
                </div>
                <div className='row flex-wrap justify-content-evenly'>
                    <div className='container-img-team'>
                        <img src="./img/mba-resma/resma1.jpg" className='img-fluid' alt="" />
                        {/* hover */}
                        <div className='detail-img-team'>
                            <div class="d-flex bd-highlight ">
                                <div class="bd-highlight">
                                    <div className='detail-icon-team'>
                                        <i class="fas fa-user"></i>
                                    </div>
                                </div>
                                <div class=" bd-highlight text-dark">
                                    Sri Widyastuti
                                </div>
                            </div>
                            <div class="mt-3 text-dark ">Founder</div>
                            <p className=' text-muted'>{social_media}</p>
                            <a href="https://www.linkedin.com/in/sri-widyastuti-484612160/" target='_blank' className='text-decoration-none' rel="noreferrer">
                                <i class="fab fa-linkedin"></i> Sri Widyastuti
                            </a>
                            <br />
                            <a href="https://instagram.com/widyastuti_sri?igshid=YmMyMTA2M2Y=" target='_blank' className='text-decoration-none' rel="noreferrer">
                                <i class="fab fa-instagram-square"></i> widyastuti_sri
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
                            <p className='text-muted'>{social_media}</p>
                            {/* linkedin */}
                            <a href="https://www.linkedin.com/in/resma-jauharotul-azizah-865680196" target={"_blank"} className='text-decoration-none' rel="noreferrer">
                                <i class="fab fa-linkedin"></i> Resma Jauharotul Azizah
                            </a>
                            <br />
                            {/* ig */}
                            <a href="https://instagram.com/rjazizah?igshid=YmMyMTA2M2Y=" target={"_blank"} className='text-decoration-none' rel="noreferrer">
                                <i class="fab fa-instagram-square"></i> rjazizah
                            </a>
                        </div>
                    </div>


                </div>
            </div >
        </>
    )
}

export default VisiMisi