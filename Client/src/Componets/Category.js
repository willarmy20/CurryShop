import React from 'react'
import CategoryItems from '../Componets/CategoryItems'
import {Container} from '../styled-components/CategoryStyle'
import Products from '../data/Product'




const Category = () => {
    return (
        <Container>
            {Products?.map((item , i) => {
                return( 
                    <CategoryItems key={i} item={item}/>
                )
            })}
        </Container> 
    )
}
export default Category


