import React from 'react';
import { NavLink } from 'react-router-dom';
import {  BookOpen } from "lucide-react";

const Navbar = () => {
    const navItems = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/course'>Courses</NavLink></li>
        <li><NavLink to='/ai'>AI Q&A</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
        <li><NavLink to='/video'>Video</NavLink></li>




    </>
    return (
        <div className="navbar bg-white shadow-2xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content text-black bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">

                        {navItems}



                    </ul>
                </div>
                <div className=' h-14 items-center flex justify-center  '>
                     {/* <img className='rounded-4xl' src="/images/freepik-colorful-flat-book-logo-20251030175322s5ed.png" alt="" /> */}
                     <BookOpen className="w-7 h-7  text-blue-500" />,
                     <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-700 via-green-600 to-purple-500 bg-clip-text text-transparent inline-block'>EduLearn</h1>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-black menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;