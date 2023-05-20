import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='p-5'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;