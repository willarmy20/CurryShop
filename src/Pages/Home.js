import React from 'react'
import NavBar from '../Componets/NavBar'
import ScrollBar from '../Componets/ScrollBar'
import Images from '../data/Carousal'

const Home = () => {
    return (
        <div>
            <NavBar />
            <ScrollBar slide={Images}/>
        </div>
    )
}

export default Home
