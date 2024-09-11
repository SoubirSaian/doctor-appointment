// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/DoctorContext";
import { useNavigate } from "react-router-dom";

const RelatedDoctor = ({doctId,speciality}) => {
    const {doctors} = useContext(AppContext);
    const navigate = useNavigate();

    const [relatedDoctors,setRelatedDoctors] = useState([]);

    useEffect(() => {

        if(doctors.length > 0 && speciality){
            setRelatedDoctors(doctors.filter(doc => doc.speciality === speciality && doc._id !== doctId));
        }

    },[doctors,doctId,speciality]);

    return (
        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
            {
                relatedDoctors.slice(0,4).map((item,index) => (
                    <div onClick={() => {navigate(`/appointment/${item._id}`); scrollTo(0,0)}} key={index} className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500">
                        <img className="bg-blue-50" src={item.image} alt="img" />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-center text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p> <p>Available</p>
                            </div>
                        </div>
                        <p className="text-grey-900 text-lg font-medium">{item.name}</p>
                        <p className="text-grey-600 text-sm">{item.speciality}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default RelatedDoctor;