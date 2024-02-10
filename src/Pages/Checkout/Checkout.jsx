import React from 'react'
import './Checkout.scss'
import NavBar from '../../Components/NavBar/NavBar'
import {Link} from 'react-router-dom'


function Checkout() {
  return (
    <div>
            <NavBar/>
            <Link to="/store">back</Link>
        </div>
  )
}

export default Checkout