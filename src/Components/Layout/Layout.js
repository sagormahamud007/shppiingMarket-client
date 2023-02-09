import React from 'react';
import { Outlet } from 'react-router-dom';
import Announcement from '../Announcement/Announcement';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Layout = () => {
    return (
        <div>
            <Announcement></Announcement>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Layout;