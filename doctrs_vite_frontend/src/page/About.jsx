// import React from 'react';

import { assets } from "../assets/assets_frontend/assets";

const About = () => {
    return (
        <div>
            <p className="text-center text-2xl text-gray-500 pt-10">About <span className="text-gray-700 font-medium">Us</span></p>

            <div className="my-10 flex flex-col md:flex-row gap-12">
                <img className="w--full md:max-w-[360px]" src={assets.about_image} alt="img" />

                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
                    <p>Baking has alwaysbeen a hobbyy,  but tthe idea of turning it into a business was inspired by the support from my friends abd family. While as an Architect building may be her professional canvas, cookies have become her personal one.</p>

                    <p>Cookies from her shop have been showcased in various corpporate evennts,garnering good reviews and encouraging feedback. The response I got is pretty much heartening fforr me to go forwaard</p>

                    <b className="text-gray-900 font-medium">Our Vision :</b>

                    <p>This Kits are more than just about baking, they provide a creative outlet for children to express themselves while having fun with their culinary creations.</p>

                </div>
            </div>

            <div className="text-xl py-4">
                <p>Why <span className="text-gray-700 font-semibold">CHOOSE US</span> </p>
            </div>

            <div className="flex flex-col md:flex-row my-20">
                <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-900 cursor-pointer">
                    <b>Efficiency</b>
                    <p>Stream lined appointment scheduling that fits into your busy lifestyle</p>
                </div>
                <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-900 cursor-pointer">
                    <b>Convenience</b>
                    <p>Access to a network of trusted healthcare professionals in your area.</p>
                </div>
                <div className="flex flex-col gap-5 border px-10 md:px-16 py-8 sm:py-16 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-900 cursor-pointer">
                    <b>Personalization</b>
                    <p>Tailored recommendations and remainders to help you stay in top health</p>
                </div>
            </div>
        </div>
    );
};

export default About;