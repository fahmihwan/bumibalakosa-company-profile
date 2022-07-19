import React from 'react'

const ScrollTop = () => {
    return (
        <a href="#" className='btn btn-warning' style={{
            width: "40px",
            position: 'fixed',
            bottom: 0,
            right: 0,
            border: "0px solid",
            margin: "0 30px 20px",
            height: "40px",
        }}>
            <i class="bi bi-arrow-up"></i>
        </a>
    )
}

export default ScrollTop