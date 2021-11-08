import React from 'react'
import { Container, Pic, Info, Title, Button} from '../styled-components/CategoryItems'



const  CategoryItems =({item})=>{
    return (
        <Container>
            <Pic src={item.img} />
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container> 
    )
}
export default CategoryItems

