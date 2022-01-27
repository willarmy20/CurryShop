import React, {useState, useEffect} from 'react'
import Images  from '../data/Carousal'
import {Slider, SliderPic}from '../styled-components/ScrollBar'



const ScrollBar = ({slide}) => {
    const[current, setCurrent] = useState(0)
    const length = slide.length

    useEffect(() => setTimeout(() =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    },3000), []);

    
    
    return (
        <Slider>
            {Images.map((slide, i) => {
                return(
                    <Slider {...i === current ? 'slide active':'slide'} key={i}>
                        {i === current && (<SliderPic src={slide.thumbnail} alt='Curry' />)}
                    </Slider>
                )
            })}
        </Slider>
    )
}

export default ScrollBar
