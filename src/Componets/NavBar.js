import React from 'react'
import {NavBarStyle, CurryLogo, UL}from '../styled-components/NavBarStyle'

const NavBar = () => {
    return (
        <NavBarStyle>
            <CurryLogo img src= "https://pbs.twimg.com/profile_images/1352639721466429441/IAj1BYjr_400x400.jpg"/>
            <UL>Shoes</UL>
            <UL>Gear</UL>
            <UL>Home</UL>
        </NavBarStyle>
    )
}

export default NavBar
