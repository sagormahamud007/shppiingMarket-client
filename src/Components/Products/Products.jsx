import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../Context/ContextProvider';
import SingleCategory from '../Categories/SingleCategory';



const Container = styled.div`
padding: 20px;
flex-wrap: wrap;
display: flex;
justify-content: space-between;
`

const Products = () => {
    const { data:categories=[], refetch } = useQuery({
        queryKey: ['categories'],
        queryFn:async () =>{
      const res = await fetch('http://localhost:5000/features')
      const data = await res.json()
      return data
        }
      })



    return (
       <div className='grid lg:grid-cols-3 mt-12 md:grid-cols-2 sm:grid-cols-1 gap-8'>
            {
                categories.map(Category => <SingleCategory
                    key={Category.id}
                    Category={Category}
                ></SingleCategory>)
            }
        </div>
    );
};

export default Products;