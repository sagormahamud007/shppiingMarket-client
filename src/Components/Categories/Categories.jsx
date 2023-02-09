import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CategoriesItem from '../CategoriesItem/CategoriesItem';

const Container = styled.div`
display: grid;
grid-template-columns:1fr 1fr 1fr 1fr;
margin-top: 100px;
grid-gap: 20px;
`

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch("Category.json")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <Container>
            {
                categories.map(item => <CategoriesItem
                    key={item.id}
                    item={item}
                ></CategoriesItem>)
            }
        </Container>
    );
};

export default Categories;