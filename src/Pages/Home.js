import React from 'react'
import NavBar from '../Componets/NavBar'
import ScrollBar from '../Componets/ScrollBar'
import Images from '../data/Carousal'
import Category from '../Componets/Category'
import Products from '../Componets/Products'

const Home = () => {
    return (
        <div>
            <NavBar />
            <ScrollBar slide={Images}/>
            <Category />
            <Products />
        </div>
    )
}

export default Home
