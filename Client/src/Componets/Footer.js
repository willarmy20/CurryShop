import React from 'react'
import  {FooterStyle, CurryLogo, UL} from '../styled-components/NavBarStyle'
import { FaGithub } from 'react-icons/fa';



const Footer = () => {
    return (
        <FooterStyle>
            <CurryLogo img src= "https://pbs.twimg.com/profile_images/1352639721466429441/IAj1BYjr_400x400.jpg"/>
            <UL>iqdabrand.com 2021</UL>
            <a href="https://github.com/willarmy20"><UL><FaGithub /></UL></a>
        </FooterStyle>
    )
}

export default Footer
