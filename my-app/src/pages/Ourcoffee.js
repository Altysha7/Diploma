import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Coffee from '../components/Coffee'
import Unique from '../components/Unique'


export default function Ourcoffee() {
    const [coffee, setCoffee] = useState([])
    useEffect(() => {
        fetch('http://localhost:4000/coffee')
            .then((respone) => respone.json())
            .then((coffee) => setCoffee(coffee))
    }, [])
    return (
        <div>
            <h1>Ourcoffee</h1>
            {/* 
            <Link to='/ourcoffee/1'><h1>1</h1></Link>
            <Link to='/ourcoffee/2'><h1>2</h1></Link> */}

            {coffee.map((cof) => <Coffee key={cof.id} {...cof} />)}
            {coffee.map((cof) => <Unique key={cof.id} {...cof} divClassName='coffee' />)}

        </div>
    )
}
