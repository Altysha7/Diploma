import React from 'react'
import '../css/Bestsellers.css'

export default function Bestsellers({ name, url, price }) {
    return (
        <div className='best'>
            <img src={url} alt='image' />
            <h2>{name}</h2>
            <h4>{price}</h4>

        </div>
    )
}
