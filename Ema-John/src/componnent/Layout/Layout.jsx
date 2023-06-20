import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header></Header>


            <main>
        <Outlet></Outlet>
    </main>
        </div>
        
    );

};

export default Layout;