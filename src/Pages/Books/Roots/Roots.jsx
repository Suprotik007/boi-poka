import React from 'react';
import Navbar from '../../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../../Components/Header/Footer/Footer';

const Roots = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Roots;