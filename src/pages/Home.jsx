import React from 'react';
import Carousol from '../components/Carousol'
import Exsthree from '../components/Exsthree';
import TabCAtegories from '../components/TabCAtegories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {

const jobs = useLoaderData()
console.log(jobs);

    return (
        <div>
        
        <Carousol></Carousol>
        <TabCAtegories ></TabCAtegories>
        <Exsthree></Exsthree>
        </div>
    );
};

export default Home;