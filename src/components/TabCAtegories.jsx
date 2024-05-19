import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import axios from 'axios';

const TabCAtegories = () => {
  const [jobs,setJobs] = useState([])

  useEffect(()=>{
       const getData = async ()=>{
          const {data} =  await axios(`http://localhost:5000/jobs`) 
          setJobs(data)
       }
       getData()
  },[])



    return (
        <Tabs>
 <div className='container px-6 py-10 mx-auto'>
    <h1 className='text-5xl font-lato font-bold text-center mb-10'>Browse By Catrgories</h1>
    <p className='text-xl font-lato font-semibold text-center mb-10'>Competently maintain unique e-business rather than vertical materials. Proactively revolutionize functionalized processes.</p>
 <div className='flex items-center justify-center '>
   <TabList>
      <Tab>Web Development</Tab>
      <Tab>Graphics Designer</Tab>
      <Tab>Digital Marketing</Tab>
    </TabList>
   </div>

    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-16 xl:grid-cols-4 lg:ml-40 xl:ml-40'>
    {jobs.filter(j=>j.category === 'Web Development').map(job => <JobCard key={job._id} job={job}></JobCard>)}
    </div>
    </TabPanel>


    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-16 xl:grid-cols-4 lg:ml-40 xl:ml-40'>
    {jobs.filter(j=>j.category === 'Graphics Design').map(job => <JobCard key={job._id} job={job}></JobCard>)}
    </div>
    </TabPanel>


    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 lg:mt-16 xl:grid-cols-4 lg:ml-40 xl:ml-40'>
    {jobs.filter(j=>j.category === 'Digital Marketing').map(job => <JobCard key={job._id} job={job}></JobCard>)}
    </div>
    </TabPanel>


 </div>
  </Tabs>
    );
};

export default TabCAtegories;