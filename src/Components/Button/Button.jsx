import React from 'react'
import './Button.scss'

function Button({buttonIcon, buttonText, clickHandler}) {
    return (
        <button onClick={clickHandler} className='button'>
            <span className='button__text'>{buttonText}</span>
            <img className="button__icon" src={buttonIcon} alt="icon"/>
        </button>
    )
}

export default Button