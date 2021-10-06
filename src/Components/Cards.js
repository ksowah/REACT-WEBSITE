import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
    return (
        <div className= 'cards'>
            <h1>Check out these EPIC destinations</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem src= 'images/img-9.jpg' text = 'Explore the hidden waterfall deep inside the Amazon' 
                        label ='Adventure' path='/services' />
                        
                        <CardItem src= 'images/img-2.jpg' text = 'Travel throught the island of Bali in a private Cruise' 
                        label ='Luxury' path='/services' />
                    
                    </ul>
                    <ul className='cards__items'>
                        <CardItem src= 'images/img-3.jpg' text = 'Set sail in the Atlantic Ocean visiting Uncharted Waters' 
                        label ='Mystery' path='/services' />
                        
                        <CardItem src= 'images/img-4.jpg' text = 'Experience football on Top of the Himilayan Mountains' 
                        label ='Adventure' path='/products' />

                        <CardItem src= 'images/img-8.jpg' text = 'Rise through the Sahara Desert on a guided camel tour' 
                        label ='Adrenaline' path='/sign-up' />
                    
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
