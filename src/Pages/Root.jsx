import React from 'react';
import Banner from '../Components/Banner';
import ToDoHero from '../Components/ToDoHero';
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='container mx-auto'>
            {/* Navbar */}
            <Navbar></Navbar>
            {/* banner */}
            <Banner />
            <div className='py-4 md:py-8 w-10/12 md:w-8/12 mx-auto'>
                {/* hero section */}
                <ToDoHero></ToDoHero>
                {/* List container */}
                <div className='min-h-96 '>
                    <Outlet></Outlet>
                </div>
            </div>

        </div>
    );
};

export default Root;