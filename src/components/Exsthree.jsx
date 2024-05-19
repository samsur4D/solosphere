import React from 'react';
import one from   '../assets/one (1).jfif'
import two from   '../assets/one (2).jfif'
import three from '../assets/one (3).jfif'
import four from  '../assets/one (4).jfif'

const Exsthree = () => {
    return (
        <div className='mt-24 mb-24 container mx-auto'>
               {/* div 1 */}
               <div data-aos="zoom-in" className='flex items-center justify-center gap-3'>
                    <div >  <img className='w-96 rounded-2xl' src={one} alt="" /></div>
                    <div data-aos="flip-up">
                        <h1 className='text-3xl font-bold'>Let the jobs find you</h1>
                        <h2>Create your free profile to get interview invites and jobs that work for you.</h2>
                        <button className='bg-purple-400 p-5 rounded-xl'>Get Hired</button>
                    </div>
               </div>
               {/* ------------------------------ */}
               <div data-aos="zoom-in" className='flex items-center justify-center gap-3'>
                   
                    <div data-aos="flip-up">
                        <h1 className='text-3xl font-bold'>Your job is personal</h1>
                        <h2>Tell us more about your goals and we'll match you with the right jobs to help you reach them.</h2>
                        <button className='bg-red-400 p-5 rounded-xl mt-5'>see Jobs</button>
                    </div>
                    <div >  <img className='w-96 rounded-2xl' src={two} alt="" /></div>
               </div>
               {/* --------------------------------- */}
               <div data-aos="zoom-in" className='flex items-center justify-center gap-3'>
               <div >  <img className='w-96 rounded-2xl' src={three} alt="" /></div>
                    <div data-aos="flip-up">
                        <h1 className='text-3xl font-bold'>Ready to level-up?</h1>
                        <h2>Excel with our Jobs Hub. Find tips to get ahead and make your goals a reality.</h2>
                        <button className='bg-yellow-400 p-5 rounded-xl mt-5'>Create Profile</button>
                    </div>
                    
               </div>
               {/* ---------------------------------- */}
               <div data-aos="zoom-out" className='flex items-center justify-center gap-3'>
                   
                   <div data-aos="flip-up">
                       <h1 className='text-3xl font-bold'>Skip the paperwork</h1>
                       <h2>Your profile is your application. Apply to jobs instantly.</h2>
                       <button className='bg-orange-400 p-5 rounded-xl mt-5'>Learn more</button>
                   </div>
                   <div >  <img className='w-96 rounded-2xl' src={four} alt="" /></div>
              </div>
        </div>
    );
};

export default Exsthree;