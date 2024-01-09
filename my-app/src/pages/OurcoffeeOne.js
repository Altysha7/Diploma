import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';

export default function OurcoffeeOne() {
    // useParams()
    const { id } = useParams()
    console.log(useParams());
    return (
        <div>OurcoffeeOne <h2>{id}</h2></div>
    )
}
