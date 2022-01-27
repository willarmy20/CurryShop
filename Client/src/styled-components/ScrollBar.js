import styled from 'styled-components'
import {FaArrowCircleRight, FaArrowCircleLeft} from 'react-icons/fa'


export const Slider = styled.div`
    position: relative;
    height: 62vh;
    display: flex;
    justify-content: center;
    align-items: center;

`

export const SliderPic = styled.img`
    width: 90vw;
    height: 60vh;
    border-radius:10px
`
export const RightArrow = styled(FaArrowCircleRight)`
    position: absolute;
    top: 40%;
    right: 31px;
    font-size: 3rem;
    color: #000;
    cursor: pointer;
    user-select: none
`
export const LeftArrow = styled(FaArrowCircleLeft)`
    position: absolute;
    top: 40%;
    left: 32px;
    font-size: 3rem;
    color: #000;
    cursor: pointer;
    user-select: none
`