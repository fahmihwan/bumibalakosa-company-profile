import React, { useState } from 'react'
import Cards from './Cards'


const ProdukDetails = ({ our_product, language }) => {

    return (
        <>
            <div id='id-our-product' className='mb-3'></div>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-md-12'>
                        <h2 className='text-center mt-5 pt-5 mb-5'>{our_product[0].title}</h2>
                        <div class="row row-cols-1 row-cols-md-3 g-4 " style={{
                            marginTop: "90px"
                        }}>
                            {
                                our_product.slice(1).map((e) => {
                                    return (
                                        <Cards key={e.id} data={e} language={language} />
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default ProdukDetails