//  import React from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import {assets} from "../assets/assets_frontend/assets";
import { useState } from "react";
 
 const NavBar = () => {
 const navigate = useNavigate();

 const [showmenu,setShowMenu] = useState(false);
 const [token,setToken] = useState(true);

    return (
        <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">

            <img onClick={()=>navigate('/')} className="w-44 curser-pointer" src={assets.logo} alt="logo" />

            <ul className="hidden md:flex items-start gap-5 font-medium">

                 <NavLink to="/">
                    <li className="py-1">Home</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
                 </NavLink>
                 <NavLink to="/about">
                    <li className="py-1">About</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
                 </NavLink>
                 <NavLink to="/doctors">
                    <li className="py-1">All Doctors</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
                 </NavLink>
                 <NavLink to="/contact">
                    <li className="py-1">Contact</li>
                    <hr className="border-none outline-none h-0.5 w-3/5 bg-primary m-auto hidden" />
                 </NavLink>
            </ul>

            {/* <div className="flex items-center gap-4">
                <NavLink to="/login">
                    <button className="hidden md:block bg-primary rounded-full px-8 py-3   text-white">Create Account</button>

                </NavLink>
            </div> */}
            <div className="flex items-center gap-4">

                {
                    token ? <div className="flex items-center cursor-pointer gap-2 group relative">
                        <img className="w-8 rounded-full" src={assets.profile_pic} alt="pic" />
                        <img className="w-2.5" src={assets.dropdown_icon} alt="icon" />

                        <div className="absolute top-0 right-0 pt-14 text-base font-medium z-20 text-gray-600 hidden group-hover:block">
                            <div className="min-w-40 bg-stone-300 rounded flex flex-col gap-4 p-4">
                                <p onClick={() => navigate("/myprofile")} className="hover:text-black cursor-pointer">My Profile</p>
                                <p onClick={() => navigate("/myappointment")} className="hover:text-black cursor-pointer">My Appointment</p>
                                <p onClick={() => setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                            </div>
                        </div>
                    </div> : (

                        <button onClick={() => navigate("/login")} className="hidden md:block bg-primary rounded-full px-8 py-3   text-white">Create Account</button>
                    )
                }
                    {/* -----display menu icon----- */}
                <img onClick={() => setShowMenu(true)} className="md:hidden w-6" src={assets.menu_icon} alt="icon" />
                 <div className={`${showmenu ? 'w-full fixed':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden text-white transition-all`}>
                    <div className="flex items-center justify-between px-6 py-5">
                        <img className="w-36" src={assets.logo} alt="logo" />
                        <img className="w-7" onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="icon" />
                    </div>
                    <ul className="flex flex-col items-center gap-4 mt-4 px=3 text-lg font-medium">
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to={'/'}>Home</NavLink>
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to={'/doctors'}>All Product</NavLink>
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to={'/about'}>About</NavLink>
                        <NavLink className="px-4 py-2 rounded inline-block" onClick={() => setShowMenu(false)} to={'/contact'}>Contact</NavLink>
                    </ul>
                 </div>
            </div>
            
        </div>
    );
 };
 
 export default NavBar;