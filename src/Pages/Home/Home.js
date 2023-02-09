import React from 'react';
import Categories from '../../Components/Categories/Categories';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';

import Products from '../../Components/Products/Products';
import Slider from '../../Components/Slider/Slider';


const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Products></Products>
            <Categories></Categories>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;