// import React from 'react';

import { assets } from "../assets/assets_frontend/assets";

const Contact = () => {
    return (
        <div>
             <div className="text-center text-2xl text-gray-500 pt-10">
                <p>Contact <span className="text-gray-700 font-medium">US</span></p>
             </div>

             <div className="my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm">
                <img className="w-full md:max-w-[360px]" src={assets.contact_image} alt="img" />

                <div className="flex flex-col justify-center items-start gap-6">
                    <p className="font-semibold text-lg text-gray-600">Our Office</p>
                    <p className="text-gray-500">BH-45, Sector-2, Saltlake <br /> Kolkata-700091, West Bengal,India</p>
                    <p className="text-gray-500">+91 8945993088</p>
                    <p className="font-semibold text-lg text-gray-500">Career at prescipto</p>
                    <p className="text-gray-500">learn more about our teams and job openings</p>

                    <button className="border border-black px-8 py-4 rounded text-sm hover:bg-black hover:text-white transition-all duration-300">Explore Jobs</button>
                </div>
             </div>
        </div>
    );
};

export default Contact;