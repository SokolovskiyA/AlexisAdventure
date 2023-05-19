import React from 'react'
import './HomePage.scss'
import logo from '../../assets/Images/logo.png'
import arrow from '../../assets/Images/Arrow.png'
import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <div className='page HomePage'>
            <img className='HomePage__logo' src={logo} alt="logo" />
            <img className="HomePage__arrow" src={arrow} alt="arrow" />
            <Link to='/about' className="HomePage__link header"><h1>Discover</h1></Link>
            <p>At our company, we invite you to discover a new dimension of adventure. With every journey, we aim to redefine the way you explore the great outdoors, empowering you to embrace the beauty of nature while enjoying the comfort and convenience of a home away from home. </p>
            <h2 className="HomePage__subhead">Shop Now</h2> 
        </div>
    )
}

export default HomePage