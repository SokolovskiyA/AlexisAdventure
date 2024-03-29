import React from 'react'
import './Store.scss'
import NavBar from '../../Components/NavBar/NavBar'
import {Link} from 'react-router-dom'

function Store() {
    return (
        <div>
            <NavBar/>
            <Link to="/store/checkout">Checkout</Link>
        </div>
    )
}

export default Store