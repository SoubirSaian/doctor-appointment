// import React from 'react';

import { useContext } from "react";
import { AppContext } from "../context/DoctorContext";

const Appointments = () => {

    const {doctors} = useContext(AppContext);
    return (
        <div>
             <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">My Appointments : </p>
             {
                doctors.map((item,index) => (
                    <div className="flex flex-col md:flex-row justify-between" key={index}>
                        <div className="grid grid-cols=[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b">
                            <img className="w-32 bg-indigo" src={item.image} alt="img" />

                            <div className="flex-1 text-sm text-zinc-600">
                                <p className="text-neutral-800 font-semibold">{item.name}</p>
                                <p>{item.speciality}</p>
                                <p className="text-zinc-800 font-medium mt-3">Address:</p>
                                <p className="text-xs">{item.address.line1}</p>
                                <p className="text-xs">{item.address.line2}</p>
                                <p className="text-sm mt-1"> <span className="text-sm text-neutral-700">Date & Time</span> 25, July 2024 </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2 justify-end">
                            <button className="text-sm text-stone-500 text-center sm:min-w-40 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-all">Pay Online</button>
                            <button className="text-sm text-stone-500 text-center sm:min-w-40 py-2 border rounded hover:bg-red-300 hover:text-white transition-all duration-all">Cancel Appointment</button>
                        </div>
                    </div>
                ))
             }
        </div>
    );
};

export default Appointments;