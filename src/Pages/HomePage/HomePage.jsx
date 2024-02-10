import React from 'react'
import './HomePage.scss'
import ShoppingSection from '../../Components/ShoppingSection/ShoppingSection'
import NavBar from '../../Components/NavBar/NavBar'
import Footer from '../../Components/Footer/Footer'
import Hero from '../../Components/Hero/Hero'

function HomePage() {
    return (
        <div className='page HomePage'>
            <NavBar/>
            <Hero/>
            <section>

            </section>
            <ShoppingSection />
            <Footer />
        </div>
    )
}

export default HomePage