import React, { useState } from 'react'
import Cards from './Cards'

const ProdukDetails = () => {
    const [detailProduk] = useState([
        {
            id: 1,
            nama: 'Cinnamon Stick',
            kelembaban: '12% - 13% Maks',
            diameter: 'maks 1,5 cm',
            warna: 'Kuning Kecoklatan',
            bentuk: 'Tongkat',
            gaya: 'Kering',
            ukuran: '6 CM – 10 CM ',
            asal: 'Kerinci',
            goresan: 'Bersih dan Bebas Jamur ',
            tebal: '0,5 mm – 1,5 mm 5',
            img: './img/Cinamond/5.png'
        },
        {
            id: 2,
            nama: ' Cengkih AB6 ',
            kelembaban: '5% - 8% Maks ',
            campuran: ' 1% - 2%',
            warna: 'Kecoklatan',
            gaya: 'Kering',
            asal: 'Kerinci & Jawa Timur 6 ',
            img: './img/Cloves/2.png'
        },
        {
            id: 3,
            nama: 'Buah Pinang ',
            kelembaban: '5% - 8% Maks ',
            warna: 'Kecoklatan',
            bentuk: 'Split ',
            asal: 'Jambi',
            gaya: 'Kering ',
            tipe: '90/95, 80/85 8',
            img: './img/Betel-nut/1.png'
        },
        {
            id: 4,
            nama: 'Lengkuas Kering ',
            kelembaban: '12% Maks ',
            warna: 'Brownsih ',
            bentuk: ': Irisan  ',
            merhodPengering: 'Sinar Matahari ',
            asal: 'Jawa Timur 9 ',
            img: './img/Galangal/2.png'
        },
        {
            id: 5,
            nama: 'Temulawak Kering ',
            kelembaban: '12% Maks ',
            warna: 'Kuning ',
            bentuk: ': Irisan  ',
            merhodPengering: 'Sinar Matahari ',
            asal: 'Jawa Timur 10',
            img: './img/Curcuma/2.png'
        },
        {
            id: 6,
            nama: 'Kunyit Kering  ',
            kelembaban: '12% Maks  ',
            warna: 'Kuning ',
            bentuk: ': Irisan  ',
            merhodPengering: 'Sinar Matahari ',
            asal: 'Jawa Timur 11',
            img: './img/Tumeric/1.png'
        },
        {
            id: 7,
            nama: 'Jahe Merah Kering ',
            kelembaban: '12% Maks ',
            warna: 'Kecoklatan ',
            bentuk: 'Irisan ',
            merhodPengering: 'Sinar Matahari ',
            asal: 'Jawa Timur',
            img: './img/Ginger/1.png',
        }
    ])


    return (
        <div className='container'>
            <div className='row mt-5'>
                <div className='col-md-12'>
                    {/* <h5>Daftar Produk</h5><br /> */}
                    <h2 className='text-center mb-5'>Daftar Produk</h2>
                    <div>
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {
                                detailProduk.map((e) => {
                                    return (
                                        <Cards key={e.id} data={e} />
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProdukDetails