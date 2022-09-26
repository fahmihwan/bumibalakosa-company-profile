import React from 'react'

const Fitur = ({ title, integrity, quality, commitment }) => {

    const cards = {
        width: '300px',
        margin: "10px",
    }

    return (
        <>
            <div id='id-our-key-features' className='mb-3'></div>
            <div style={{
                backgroundImage: "url('./img/other-img/wave.jpg')",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed"
            }}>
                <div className='container' style={{
                    paddingTop: "120px"
                }}>
                    <h2 className='text-center'>{title.title}</h2>
                    <div className='row'>
                        <div className='col mb-4 mb-md-0 d-flex justify-content-center '>
                            <div className='card-keyframe-animation  ' >
                                <div className='card-fitur' style={cards} >
                                    <div className='card-none-hover text-center'>
                                        <div className='bg-warning fitur-icon '>
                                            <img src="./img/fitur/integrity.png" alt="" style={{ width: "120px" }} />
                                        </div>
                                        <br />
                                        <b className='text-center'>{integrity.subtitle}</b>
                                    </div>
                                    <div className='card-block-hover text-center'>
                                        <article className='text-center'>
                                            {integrity.description}
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col mb-4 mb-md-0 d-flex justify-content-center'>
                            <div className='card-keyframe-animation ' >
                                <div className='card-fitur' style={cards} >
                                    <div className='card-none-hover text-center'>
                                        <div className='bg-warning fitur-icon'>
                                            <img src="./img/fitur/quality.png" alt="" style={{ width: "100px" }} />
                                        </div>
                                        <br />
                                        <b className='text-center'>{quality.subtitle}</b>
                                    </div>
                                    <div className='card-block-hover text-center'>
                                        <article className='text-center'>
                                            {quality.description}
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col mb-4 mb-md-0 d-flex justify-content-center'>
                            <div className='card-keyframe-animation ' >
                                <div className='card-fitur ' style={cards}>
                                    <div className='card-none-hover text-center'>
                                        <div className='bg-warning fitur-icon'>
                                            <img src="./img/fitur/commitment.png" alt="" style={{ width: "120px" }} />
                                        </div>
                                        <br />
                                        <b className='text-center '>{commitment.subtitle}</b>
                                    </div>
                                    <div className='card-block-hover text-center'>
                                        <article className='text-center'>
                                            {commitment.description}
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </>



    )

}



export default Fitur