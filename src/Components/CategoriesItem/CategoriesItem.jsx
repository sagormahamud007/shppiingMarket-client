import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
object-fit: cover;
&:hover{
 height:20px;
 width:20px;
}
`
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
height: 100%;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`
const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
font-weight: 600;
`

const CategoriesItem = ({ item }) => {
    const { title, image } = item;

    return (
        <Container>
            <Image src={image} />
            <Info>
                <Title>{title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    );
};

export default CategoriesItem;