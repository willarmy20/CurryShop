import React from 'react'
import ScrollBar from '../Componets/ScrollBar'
import Images from '../data/Carousal'
import Category from '../Componets/Category'


const Home = () => {
    return (
        <div>
            <ScrollBar slide={Images}/>
            <Category />
        </div>
    )
}

export default Home
