import React from 'react'
import { Container, Pic, Info, Title, Button} from '../styled-components/CategoryItems'
import {useHistory} from "react-router-dom";



const  CategoryItems = ({item})=>{
    let history = useHistory();
    return (
        <Container>
            <Pic src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button onClick={() => history.push(item.url)}>SHOP NOW</Button>
            </Info>
        </Container> 
    )
}
export default CategoryItems

