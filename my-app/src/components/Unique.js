import React from 'react'
import { Link } from 'react-router-dom'

export default function Unique({ id, name, country, url, price, divClassName }) {
    console.log(id, name, country, url, price);
    return (
        <>
            {
                country ? <Link to={`/ourcoffee/${id}`}>
                    <div className={divClassName}>

                        <>
                            {id}
                            <img src={url} alt='image' />
                            <h2>{name}</h2>
                            {country ? <p>{country}</p> : null}
                            <h4>{price}</h4>


                        </>
                    </div>
                </Link> : <div className={divClassName}>

                    <>
                        {id}
                        <img src={url} alt='image' />
                        <h2>{name}</h2>
                        {country ? <p>{country}</p> : null}
                        <h4>{price}</h4>


                    </>
                </div>
            }
        </>
    )
}
