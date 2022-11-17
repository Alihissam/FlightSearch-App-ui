import React from 'react'

const Card = ({ src, title, description }) => {
    return (
        <>
            <div className='container'>
                <div className="card ">
                    <div className="card-image">
                        <img src={src} className=' img-fluid box-image' />
                    </div>
                    <h4>{title}</h4>
                    <span className='card-desc'>{description}</span>
                </div>
            </div>
        </>
    )
}

export default Card
