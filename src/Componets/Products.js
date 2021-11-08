import React, {useState,useEffect} from 'react';
import axios from 'axios';

const Products = () => {
    const[shoes, setShoes] = useState([]);
    useEffect(() => {
        axios.get('https://v1-sneakers.p.rapidapi.com/v1/sneakers')
        .then(res =>{console.log(res)})
    }, [])



    return (
        <div>
        </div>
    )
}

export default Products
