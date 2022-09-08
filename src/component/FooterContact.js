import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const FooterContact = ({ title, name, email, message, contact_us }) => {
    let btnSubmit = useRef()

    function sendEmail(e) {
        e.preventDefault()
        emailjs.sendForm('service_09py8xm', 'template_2kzrkq4', e.target, 'JYS_r2w2KWXy993_u')
            .then((result) => {
                alert('pesan anda telah terkirim');
                btnSubmit.current.disabled = true;
                // btnSubmit.current.style.background = "grey";

            }, (error) => {
                alert('gagal mengirimkan pesan');
            });
    }

    return (
        <div className='container'>
            <div className='row' style={{
                paddingTop: "100px"
            }}>
                <div className='row'>
                    <div className='col-md-6'>
                        <h5 className='text-dark'>{contact_us}</h5>
                        <table className='tb-footer-contact'>
                            <tr key="1">
                                <td>phone </td>
                                <td>: +62 851 5872 5883</td>
                            </tr>
                            <tr key="2">
                                <td>mail </td>
                                <td>: info@bumibalakosa.com</td>
                            </tr>
                            <tr key="3">
                                <td>facebook </td>
                                <td>: <a className='text-decoration-none text-dark' href="https://www.facebook.com/107535438526431/posts/153398483940126/?d=n&substory_index=0">Bumi Balakosa</a> </td>
                            </tr>
                            <tr key="4">
                                <td>linkedin </td>
                                <td>: <a className='text-decoration-none text-dark' href="https://www.linkedin.com/company/bumibalakosa-com/ ">BUMI BALAKOSA BAYANAKA</a></td>
                            </tr>
                        </table>
                    </div>
                    <div className='mt-5 mt-md-0 col-md-6'>
                        <h5 className='text-dark'>{title}</h5>
                        <form className='text-dark' onSubmit={sendEmail}>
                            <div className="mb-3">
                                <input type="text" name='name' required className="form-control" placeholder={name} />
                            </div>
                            <div className="mb-3">
                                <input type="email" name='user_email' required className="form-control" placeholder={email} />
                            </div>
                            <div className="mb-3">
                                <textarea placeholder={message} required name='message' className="form-control" rows={3} cols={5} defaultValue={""} />
                            </div>
                            <button type='submit' ref={btnSubmit} className='btn btn-warning'>submit</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FooterContact