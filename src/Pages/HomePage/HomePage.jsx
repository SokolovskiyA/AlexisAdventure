import React from 'react'
import './HomePage.scss'
import ShoppingSection from '../../Components/ShoppingSection/ShoppingSection'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'

function HomePage() {
    return (
        <div className='page HomePage'>
            <NavBar/>
            <section>
                <h2>Elevating Outdoor Experiences...</h2>
                <p>At our company, we invite you to discover a new dimension of adventure. With every journey, we aim to redefine the way you explore the great outdoors, empowering you to embrace the beauty of nature while enjoying the comfort and convenience of a home away from home.</p>
            </section>
            <ShoppingSection />
            <Footer />
        </div>
    )
}

export default HomePage