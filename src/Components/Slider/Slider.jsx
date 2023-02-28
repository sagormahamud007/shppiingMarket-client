import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color:white;
    display: flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    margin: auto;
    opacity: 0.5;
    z-index: 2;
    
`
const Wrapper = styled.div`
height: 100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);
`

const Slide = styled.div`
width:100vw;
height: 100vh;
display:flex;
align-items: center;
background-color:#${props => props.bg};
`
const ImgContainer = styled.div`
flex:1
`
const Image = styled.img`
height:100%
`
const InfoContainer = styled.div`
flex:1;
padding:50px;
`
const Title = styled.h1`
font-size: 50px;
;
`
const Desc = styled.p`
margin: 50px 0px;
font-size: 20px;
letter-spacing: 3px;
`
const Button = styled.button`
padding: 10px 25px;
font-size: 20px;
background-color: teal;
border: none;
color: white;
cursor: pointer;
border-radius: 5px;
`

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const [slideItems, setSlideItems] = useState([])

    useEffect(() => {
        fetch("https://shopping-market-server.vercel.app/bannerProduct")
            .then(res => res.json())
            .then(data => setSlideItems(data))
    }
        , [])
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined style={{ fontSize: "50px", color: "teal" }} />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    slideItems.map((item) => (

                        <Slide bg={item.bg}>
                            <ImgContainer>
                               <Image src={item?.image}/>
                            </ImgContainer>
                            <InfoContainer data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-duration="500">
                                <Title>{item?.title.slice(0,60)}...</Title>
                                <Desc>{item?.description}</Desc>
                                <Link to={'/productList'}><Button>SHOP NOW</Button></Link>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined style={{ fontSize: "50px", color: "teal" }} />
            </Arrow>
        </Container>
    );
};

export default Slider;