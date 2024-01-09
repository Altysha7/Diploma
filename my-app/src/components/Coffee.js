import React from 'react'
import '../css/Coffee.css'


export default function Coffee({ id, name, country, url, price }) {


    // console.log(props);
    return (
        <div className='coffee'>
            <small>{id}</small>
            <img src={url} alt='image' />
            <h2>{name}</h2>
            <p>{country}</p>
            <h4>{price}</h4>
        </div>
    )
}
