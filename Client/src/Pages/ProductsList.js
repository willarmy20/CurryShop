import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { ShoeContainer, ShoeImg, ShoeInfo, Thumbnail, Border} from '../styled-components/Shoes';
import Tilt from 'react-parallax-tilt';



const ProductsList = () => {
    const [shoes, setShoes] = useState([]);

    useEffect(() => {
      const fetchShoe = () => {
        const options = {
            method: 'GET',
            url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
            params: {limit: '12', name: 'Curry'},
            headers: {
              'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com',
              'x-rapidapi-key': 'bd5ccc67e0msh4698b4ba2aa93dap19bf2djsnc4fab986bf8f'
            }
          };
          axios.request(options).then(function (response) {
            const shoeRepo = response.data;
            console.log(shoeRepo)
            setShoes(shoeRepo)
        }).catch(function (error) {
            console.error(error);
        });
      }
    fetchShoe()
    }, []);

    return (
        <ShoeContainer>
            {shoes?.results?.map(items => (
              <Tilt>
              <Border >
                <ShoeImg src={items.media.smallImageUrl} alt=""></ShoeImg>
                <Thumbnail  src={items.media.thumbUrl}></Thumbnail>
                <ShoeInfo>{items.title}</ShoeInfo>
                <ShoeInfo>{items.colorway}</ShoeInfo>
                <button>Add To Cart</button>
              </Border>
              </Tilt>
            ))} 
        </ShoeContainer>
    )
}

export default ProductsList
