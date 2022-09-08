import React from 'react'

const HeaderContact = ({ topContact }) => {
    return (
        <div className='container-fluid bg-secondary text-light py-2 header-contact'>
            <span className='fst-italic'>{topContact}</span> <span className='ms-5 me-2 fw-normal'>WA +62 85158725883 (Resma)</span>
            | <span className=''>+62 81994582396 (Widya)</span>
        </div>
    )
}

export default HeaderContact