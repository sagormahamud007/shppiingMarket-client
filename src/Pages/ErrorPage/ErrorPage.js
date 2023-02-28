import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className='found-page mb-5' data-aos="flip-left">
            <h1 className='found-Code'><span className='bg-lime-400 rounded-full'>4</span> <span className='bg-green-700 rounded-full'>0</span> <span className='bg-teal-400 rounded-full'>4</span></h1>
            <h2 className='text-5xl font-bold'> <span className='text-yellow-200'>Opps!</span> Page Not Found</h2>
            <p className='py-2'>Sorry the page you're looking for doesn't exist. if you think somethings is broken,report a problem</p>
            <Link to='/'><button className='home-btn mt-5'>Return Home</button></Link>
        </div>
    );
};

export default ErrorPage;