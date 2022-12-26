import React from 'react';
import Announcement from '../../Components/Announcement/Announcement';
import Navbar from '../../Components/Navbar/Navbar';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar></Navbar>
            <Slider></Slider>
        </div>
    );
};

export default Home;