import React from 'react'
import './ShoppingItem.scss'
import Button from '../Button/Button'
import shoppingCart from '../../assets/Icons/ShoppingCart.svg'

function ShoppingItem({itemName, itemPrice, itemPic}) {
    return (
        <div className="item">
            <h2 className='item__name'>{itemName}</h2>
            <img className='item__picture' src={itemPic} alt="tent" />
            <p className='item__price'>{itemPrice}</p>
            <Button buttonIcon={shoppingCart} buttonText='Add to cart' />
        </div>
    )
}

export default ShoppingItem