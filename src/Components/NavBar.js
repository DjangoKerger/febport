import React from 'react';
import { NavLink } from "react-router-dom";

// main job of the navbar is to route users to the sections when they click on the word.
// 1. import NavLink from react router dom.
// 2. place an html header with a div inside and then a nav inside the div.
// 3. place the navlink inside the nav element and copy 4 times for the 4 tabs we need.
// 4. then point the navlink to where you want the link to take you using to=""
// 5. import into App.js and place about the Routes but inside the BrowserRouter.

const NavBar = () => {
  return (
    <header className='bg-red-600'>
        <div className='container mx-auto flex justify-between'>
          <nav>
            <NavLink 
              to="/" 
              exact
              activeClassName="text-white" 
              className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest"
              >
              Django
            </NavLink>
            <NavLink 
              to="/post" 
              className="inline-flex items-center py-3 px-3 my-6 rounder text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700"
              >
              Blog Post
            </NavLink>
            <NavLink 
              to="/project" 
              className="inline-flex items-center py-3 px-3 my-6 rounder text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700"
              >
              Projects
            </NavLink>
            <NavLink 
              to="/about" 
              className="inline-flex items-center py-3 px-3 my-6 rounder text-red-200 hover:text-green-800"
              activeClassName="text-red-100 bg-red-700"
              >
              About me!
            </NavLink>
          </nav>
        </div>
    </header>
  )
};

export default NavBar;