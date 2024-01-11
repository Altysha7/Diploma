import React from 'react'
import { useState, useEffect } from 'react'
import Unique from '../components/Unique'



export default function Main() {
    const [bestsellers, setBestsellers] = useState([])
    useEffect(() => {
        fetch(' http://localhost:4000/bestsellers')
            .then((respone) => respone.json())
            .then((bestsellers) => setBestsellers(bestsellers))
    }, [])

    return (
        <div>
            {bestsellers.map((best) => <Unique key={best.name} divClassName='best' {...best} />)}
        </div>
    )
}
