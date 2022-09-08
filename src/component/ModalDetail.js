import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalDetail = ({ detailProduct, language }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);





    return (
        <>
            <Button className='css-button-rounded--red ' variant="primary" onClick={handleShow}>
                See Detail
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{detailProduct.nama}</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    {

                        language === "indonesia" ?
                            (
                                <table className='detail-product-table'>
                                    <tbody key={detailProduct.id}>
                                        <tr >
                                            <td>Nama</td>
                                            <td>: {detailProduct.nama}</td>
                                        </tr>
                                        <tr >
                                            <td>Kelembaban</td>
                                            <td>: {detailProduct.kelembaban}</td>
                                        </tr>
                                        {
                                            detailProduct.diameter && (
                                                <tr >
                                                    <td>Diameter</td>
                                                    <td>: {detailProduct.diameter}</td>
                                                </tr>
                                            )
                                        }
                                        <tr >
                                            <td>Warna</td>
                                            <td>: {detailProduct.warna}</td>
                                        </tr>
                                        {
                                            detailProduct.bentuk && (
                                                <tr >
                                                    <td>Bentuk</td>
                                                    <td>: {detailProduct.bentuk}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.gaya && (
                                                <tr >
                                                    <td>Gaya</td>
                                                    <td>: {detailProduct.gaya}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.ukuran && (
                                                <tr >
                                                    <td>Ukuran</td>
                                                    <td>: {detailProduct.ukuran}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.goresan && (
                                                <tr >
                                                    <td>Goresan</td>
                                                    <td>: {detailProduct.goresan}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.tebal && (
                                                <tr >
                                                    <td>Ketebalan</td>
                                                    <td>: {detailProduct.tebal}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.campuran && (
                                                <tr >
                                                    <td>Campuran</td>
                                                    <td>: {detailProduct.campuran}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.merhodPengering && (
                                                <tr >
                                                    <td>Merhod Pengering</td>
                                                    <td>: {detailProduct.merhodPengering}</td>
                                                </tr>
                                            )
                                        }
                                        <tr >
                                            <td>Asal</td>
                                            <td>: {detailProduct.asal}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            )
                            :
                            (
                                <table className='detail-product-table'>
                                    <tbody key={detailProduct.id}>
                                        <tr >
                                            <td>Name</td>
                                            <td>: {detailProduct.nama}</td>
                                        </tr>
                                        <tr >
                                            <td>Moisture</td>
                                            <td>: {detailProduct.kelembaban}</td>
                                        </tr>
                                        {
                                            detailProduct.diameter && (
                                                <tr >
                                                    <td>Diameter</td>
                                                    <td>: {detailProduct.diameter}</td>
                                                </tr>
                                            )
                                        }
                                        <tr >
                                            <td>Color</td>
                                            <td>: {detailProduct.warna}</td>
                                        </tr>
                                        {
                                            detailProduct.bentuk && (
                                                <tr >
                                                    <td>Shape</td>
                                                    <td>: {detailProduct.bentuk}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.gaya && (
                                                <tr >
                                                    <td>Style</td>
                                                    <td>: {detailProduct.gaya}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.ukuran && (
                                                <tr >
                                                    <td>Size</td>
                                                    <td>: {detailProduct.ukuran}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.goresan && (
                                                <tr >
                                                    <td>Scratch</td>
                                                    <td>: {detailProduct.goresan}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.tebal && (
                                                <tr >
                                                    <td>Thickness</td>
                                                    <td>: {detailProduct.tebal}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.campuran && (
                                                <tr >
                                                    <td>Mixture</td>
                                                    <td>: {detailProduct.campuran}</td>
                                                </tr>
                                            )
                                        }
                                        {
                                            detailProduct.merhodPengering && (
                                                <tr >
                                                    <td>Drying Merhod</td>
                                                    <td>: {detailProduct.merhodPengering}</td>
                                                </tr>
                                            )
                                        }
                                        <tr >
                                            <td>Origin</td>
                                            <td>: {detailProduct.asal}</td>
                                        </tr>
                                    </tbody>
                                </table>

                            )
                    }


                </Modal.Body>

            </Modal>
        </>
    )
}

export default ModalDetail