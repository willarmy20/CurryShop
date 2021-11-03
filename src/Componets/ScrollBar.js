import React, {useState} from 'react'
import Images  from '../data/Carousal'
import {LeftArrow, RightArrow, Slider, SliderPic}from '../styled-components/ScrollBar'


const ScrollBar = ({slide}) => {
    const[current, setCurrent] = useState(0)
    const length = slide.length

    const nextSlide = setTimeout(() =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
    },3000);

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    
    
    return (
        <Slider>
            <LeftArrow onClick={prevSlide} />
            <RightArrow  onClick={nextSlide}/>
            {Images.map((slide, index) => {
                return(
                    <Slider {...index === current ? 'slide active':'slide'} key={index}>
                        {index === current && (<SliderPic src={slide.thumbnail} alt='Curry' />)}
                    </Slider>
                )
            })}
        </Slider>
    )
}

export default ScrollBar
