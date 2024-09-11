// import React from 'react';

import { assets } from "../assets/assets_frontend/assets";

const Footer = () => {
    return (
        <div className="md:mx-10">
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                {/* -------left part------- */}
                <div>
                    <img className="mb-5 w-40" src={assets.logo} alt="logo" />
                    <p className="w-full md:w-2/3 text-grey-600 leading-6">Eid trip to north gets expensive. Bus service providers overcharge, take advantage of no set fare. poor mentoring</p>
                </div>

                {/* ------- middle part------- */}
                <div>
                    <p className="text-xl font-medium mb-5 ">AVAILABLE</p>
                    <ul className="flex flex-col text-gray-600 gap-2">
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                        <li>Privacy policy</li>
                    </ul>
                </div>

                {/* ------- right part------- */}
                <div>
                    <p className="text-xl font-medium mb-5">Get IN Touch</p>
                    <ul className="flex flex-col text-gray-600 gap-2">
                        <li>+8801641632319</li>
                        <li>soubir2018@gmail.com</li>
                    </ul>
                </div>
            </div>
            
            {/* -----copy right section------ */}
            <hr />
            <p className="text-center text-sm py-5 font-semibold">Copyright reserver by Soubir Saian Mallick &copy; 2024</p>
        </div>
    );
};

export default Footer;