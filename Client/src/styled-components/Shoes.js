import styled from 'styled-components'



export const ShoeContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1%
margin-top: 80vh;
margin-left: 80px;
margin-right: 80px;
overflow: hidden;
boxShadow: "4px 5px 2px #9E9E9E"
`

export const ShoeImg = styled.img`
border-radius: 5px;
height: 110px;
width: 100%
object-fit: cover;
border: 1px solid #bacdd8;
padding: 25px;
margin-top: 10px;

`

export const ShoeInfo = styled.div`
flex:1;
padding: 4px 8px;
font-size: 12px;
font-weight: 600;
color: #788697;
`

export const Thumbnail = styled.img`
height: 70px;
transform: scaleX(-1)

`
export const Border = styled.div`
height: 90%;
width: 50%;
border: 1px solid #bacdd8;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
padding: 2px 16px;
border-radius: 5px;
margin-top:50px;
color: blue
`

export const Banners = styled.div`
display: flex
height: 100px;
justify-content:center;
`

export const BannerPhoto = styled.img`
margin-top: 50px;
height: 500px;
// width: 30px;
justify-content: center
`