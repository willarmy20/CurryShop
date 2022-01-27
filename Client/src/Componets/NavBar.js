import React from 'react'
import {NavBarStyle, CurryLogo, UL}from '../styled-components/NavBarStyle'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <NavBarStyle>
            <CurryLogo img src= "https://pbs.twimg.com/profile_images/1352639721466429441/IAj1BYjr_400x400.jpg"/>
            <Link to="/shoes"><UL>Shoes</UL></Link>
            <UL>Gear</UL>
            <Link to="/"><UL>Home</UL></Link>
        </NavBarStyle>
    )
}

export default NavBar
