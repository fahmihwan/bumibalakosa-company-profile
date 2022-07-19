import React, { useEffect } from 'react'

import AOS from "aos";
import "aos/dist/aos.css";

const Cards = (props) => {
    const { data } = props;

    useEffect(() => {
        AOS.init({ duration: 1000, delay: 100, });
        AOS.refresh();
    }, []);

    return (
        <div class="col " data-aos="fade-up"  >
            <div className='card-items me-3 mb-3' style={{ width: "22rem" }}>
                <div className='cards-shadow-gradient'>
                    <b className='bg-warning text-dark badge'>{data.nama}</b>
                </div>
                <img src={data.img} alt="" className='img-fluid' style={{ width: "100%" }} />
                <div className='card-table-hover'>
                    <div className='detail-product' >
                        <div className='card-title-name '>
                            <b>{data.nama}</b>
                        </div>
                        <table className='detail-product-table'>
                            <tbody key={data.id}>
                                <tr >
                                    <td>Nama</td>
                                    <td>: {data.nama}</td>
                                </tr>
                                <tr >
                                    <td>kelembaban</td>
                                    <td>: {data.kelembaban}</td>
                                </tr>
                                {
                                    data.diameter && (
                                        <tr >
                                            <td>diameter</td>
                                            <td>: {data.diameter}</td>
                                        </tr>
                                    )
                                }
                                <tr >
                                    <td>warna</td>
                                    <td>: {data.warna}</td>
                                </tr>
                                {
                                    data.bentuk && (
                                        <tr >
                                            <td>bentuk</td>
                                            <td>: {data.bentuk}</td>
                                        </tr>
                                    )
                                }
                                {
                                    data.gaya && (
                                        <tr >
                                            <td>gaya</td>
                                            <td>: {data.gaya}</td>
                                        </tr>
                                    )
                                }
                                {
                                    data.ukuran && (
                                        <tr >
                                            <td>ukuran</td>
                                            <td>: {data.ukuran}</td>
                                        </tr>
                                    )
                                }
                                {
                                    data.goresan && (
                                        <tr >
                                            <td>goresan</td>
                                            <td>: {data.goresan}</td>
                                        </tr>
                                    )
                                }
                                {
                                    data.tebal && (
                                        <tr >
                                            <td>tebal</td>
                                            <td>: {data.tebal}</td>
                                        </tr>
                                    )
                                }
                                {
                                    data.campuran && (
                                        <tr >
                                            <td>campuran</td>
                                            <td>: {data.campuran}</td>
                                        </tr>
                                    )
                                }
                                {
                                    data.merhodPengering && (
                                        <tr >
                                            <td>merhod Pengering</td>
                                            <td>: {data.merhodPengering}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                </div>

            </div >
        </div >

    )
}

export default Cards