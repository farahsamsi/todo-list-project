import React from 'react';
import Banner from '../Components/Banner';
import ToDoHero from '../Components/ToDoHero';
import Navbar from '../Components/Navbar';

const Root = () => {
    return (
        <div className='container mx-auto'>
            {/* banner */}
            <Banner />
            {/* hero section */}
            <ToDoHero></ToDoHero>
            {/* List container */}
            {/* Navbar */}
            <Navbar></Navbar>
        </div>
    );
};

export default Root;