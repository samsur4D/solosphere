import React, { useContext } from 'react';
import logo from '../assets/solosphere-high-resolution-logo-black-transparent.svg'
import { AuthContext } from '../provider/AuthProvider';
import { Link } from 'react-router-dom';

const Nav = () => {

const {user , logOut} = useContext(AuthContext)

    return (
        <div className='navbar bg-gray-100 shadow-sm container px-4 mx-auto'>
        <div className='flex-1'>
          <Link to='/' className='flex gap-2 items-center'>
            <img className='w-auto h-7' src={logo} alt='' />
            <span className='font-bold'>SoloSphere</span>
          </Link>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-1'>
            <li>
              <Link to='/'>Home</Link>
            </li>
  
           {
            !user && 
            <li>
                <Link to='/login'>Login</Link>
              </li>
           }
          </ul>
  
         {
            user &&  <div className= '  z-50 dropdown dropdown-end '>
            <div
              tabIndex={0}
              role='button'
              className='btn btn-ghost btn-circle avatar'
            >
              <div title={user?.displayName} className='w-10 rounded-full'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile Photo'
                  src={user?.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className='bg-gray-200 menu menu-sm  dropdown-content mt-3 z-[1000] relative p-2 shadow  rounded-box w-52'
            >
              <li>
                <Link to='/add-job' className='justify-between'>Add Job</Link>
              </li>
              <li>
                <Link to='/my-posted-jobs'>My Posted Jobs</Link>
              </li>
              <li>
                <Link >My Bids</Link>
              </li>
              <li>
                <Link >Bid Requests</Link>
              </li>
              <li className='mt-2'>
                <button onClick={logOut} className='bg-gray-200 block text-center'>Logout</button>
              </li>
            </ul>
          </div>
         }
        </div>
      </div>
    );
};

export default Nav;