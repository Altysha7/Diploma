import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import Ourcoffee from '../pages/Ourcoffee'
import Foryourpleasure from '../pages/Foryourpleasure'


export default function Layout() {

    const headerStyle = {
        backgroundColor: 'lightblue',
        height: '640px'
    }

    const navStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: '0 auto',
        padding: '50px',
        width: '1190px',
    }
    const navUl = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }

    const liStyle = {
        color: 'red',
        textDecoration: 'none',
        margin: '10px'

    }


    return (
        <>
            <header style={headerStyle}>
                <nav style={navStyle}>
                    <ul style={navUl}>
                        <li style={liStyle}><Link to='/'>Coffee house</Link></li>
                        <li style={liStyle}><Link to='ourcoffee'>Our coffee</Link></li>
                        <li style={liStyle}><Link to='/foryourpleasure'>For your pleasure</Link></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
            <footer>
                <ul>
                    <li><Link to='/'>Coffee house</Link></li>
                    <li><Link to='/ourcoffee'>Our coffee</Link></li>
                    <li><Link to='/foryourpleasure'>For your pleasure</Link></li>

                </ul>
            </footer>
        </>
    )
}
