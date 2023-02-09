import React from 'react';
import styled from 'styled-components';
import Announcement from '../Announcement/Announcement';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import NewsLetter from '../NewsLetter/NewsLetter';
import Products from '../Products/Products';



const Container = styled.div``

const Title=styled.h1`
margin-top: 50px;
margin-left: 20px;
`

const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`

const Filter=styled.div`
margin: 20px;
`

const FilterText=styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
`
const Select=styled.select`
padding: 10px;
margin-left: 20px;
`
const Option=styled.option`
font-size: 16px;
margin-bottom: 5px;
`


const ProductList = () => {
    return (
        <Container>
            <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
Color
                    </Option>
                    <Option>White</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>

                <Select>
                    <Option disabled selected>
Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
           </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>
                     Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products></Products>
        <NewsLetter></NewsLetter>
        </Container>
    );
};

export default ProductList;