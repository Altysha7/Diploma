import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom';
export default function OurcountryOne() {
    const { country } = useParams()
    console.log(useParams());
    return (
        <div>OurcountryOne  <h1>{country}</h1> </div>
    )
}
