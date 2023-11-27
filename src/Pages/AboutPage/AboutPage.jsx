import React from 'react';
import SlideNav from '../../Components/SlideNav/SlideNav';
import { Outlet } from 'react-router-dom';

const AboutPage = () => {
    return (
        <div>
            <h1 className='text-center'>This is About</h1>
            <div className='grid grid-cols-4'>
                <SlideNav />
                <Outlet className="col-span-3" />

            </div>
        </div>
    );
};

export default AboutPage;