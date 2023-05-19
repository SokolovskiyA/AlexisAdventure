import React from 'react'
import './ShoppingSection.scss'
import ShoppingItem from '../ShoppingItem/ShoppingItem'
import itemPic1 from '../../assets/Images/lightTent.jpg'
import itemPic2 from '../../assets/Images/AluTent.jpg'

function ShoppingSection() {
    return (
        <section className="shopping">
            <ShoppingItem itemName="The Camper" itemPrice="$1500" itemPic={itemPic1}/>
            <ShoppingItem itemName="The Weekend Warrior" itemPrice="$1700" itemPic={itemPic2}/>    
        </section>
    )
}

export default ShoppingSection