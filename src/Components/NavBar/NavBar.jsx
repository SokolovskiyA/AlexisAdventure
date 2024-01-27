import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Images/logo.png'
import './NavBar.scss'

function NavBar() {
    const [currentPage, setCurrentPage] = useState('home');

    return (
        <div className='navbar'>
            <NavLink activeClassname='active' className='navbar__logo_link' to='/'><img className='navbar__logo' src={logo} alt="logo" /></NavLink>
            <NavLink activeClassname='active' className='navbar__link' to='/'>Home</NavLink>
            <NavLink activeClassname='active' className='navbar__link' to='/store'>store</NavLink>
            <NavLink activeClassname='active' className='navbar__link' to='/rent'>rent</NavLink>
            <NavLink activeClassname='active' className='navbar__link' to='/contact'>Contact</NavLink>
        </div>
    )
}

export default NavBar