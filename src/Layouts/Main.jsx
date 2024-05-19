
import React from 'react';
import Headroom from 'react-headroom';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Headroom> 
                         <Nav></Nav>
            </Headroom>
            <div className='min-h-[calc(100vh-344px)]'>
            <Outlet></Outlet>
            </div>
          
            <Footer></Footer>

            
        </div>
    );
};

export default Main;