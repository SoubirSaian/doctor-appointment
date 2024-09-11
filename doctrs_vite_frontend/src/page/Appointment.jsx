// import React from 'react';
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/DoctorContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctor from "../component/RelatedDoctor";


const Appointment = () => {
    const {  doctId } = useParams();
    const { doctors } = useContext(AppContext);
    const [docInfo,setDocInfo] = useState({});

    let daysOfWeek = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

    const [doctorSlot,setDoctorSlot] = useState([]);
    const [slotIndex,setSlotIndex] = useState(0);
    const [slotTime,setSlotTime] = useState('');

    const getDoctorsDetail = async () => {
         setDocInfo(doctors.find(n => n._id === doctId));
    }

    const getAvailableSlots = async () => {
        setDoctorSlot([]);

        //getting current date
        let today = new Date();

        for(let i = 0; i < 7 ; i++){
            //getting date with index
            let currentDate = new Date(today);
            currentDate.setDate(today.getDate() + i);

            //getting endtime of the day with index
            let endTime = new Date();
            endTime.setDate(today.getDate() + i);
            endTime.setHours(21,0,0,0);

            //setting hours
            if(today.getDate() === currentDate.getDate()){
                currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10);
                currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
            }
            else{
                currentDate.setHours(10);
                currentDate.setMinutes(0);
            }

            let timeSlots = [];

            while(currentDate < endTime){
                let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit',minute: '2-digit'});

                //add slot to array
                timeSlots.push ({
                    dateTime: new Date(currentDate),
                    time: formattedTime
                });

                //increment current time by 30 minutes
                currentDate.setMinutes(currentDate.getMinutes() + 30);
            }

            setDoctorSlot(prev => ([...prev,timeSlots]));
        }
    }

    useEffect(()=>{

        getDoctorsDetail();

    },[doctors,doctId]);


    useEffect(()=>{

         getAvailableSlots();

    },[docInfo]);

    useEffect(()=>{
        console.log(doctorSlot);
        
    },[doctorSlot])

    

    return docInfo && (
        <div>
              {/* ---------- doctors details-------- */}
              <div className="flex flex-col sm:flex-row gap-4">

                <div>
                    <img className="w-full sm:max-w-72 bg-primary rounded-lg" src={docInfo.image} alt="img" />
                </div>

                <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-8 sm:mx-0 mt-[80px] sm:mt-0">
                    <p className="flex items-center gap-2 text-2xl font-medium text-grey-900">{docInfo.name} 
                        <img className="w-5" src={assets.verified_icon} alt="icon" />
                    </p>

                    <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                        <p>{docInfo.degree} - {docInfo.speciality}</p>
                        <button className="px-2 py-0.5 border text-xs rounded-full">{docInfo.experience}</button>
                    </div>

                    <div>
                        <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">About <img src={assets.info_icon} alt="icon" /></p>

                        <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
                    </div>

                    <p className="text-gray-500 font-medium mt-4">Appointment fee : <span className="text-gray-600">{docInfo.fees}</span>$</p>

                </div>

              </div>

                  {/* ------Booking Slot------- */}

                <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700 ">
                    <p>Booking Slots</p>

                    <div className="w-full flex items-center gap-3 mt-4 overflow-x-scroll">
                        {
                            doctorSlot.length && doctorSlot.map((item,index)=>(
                                <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'} `} key={index}>
                                    <p>{item[0] && daysOfWeek[item[0].dateTime.getDay()]}</p>
                                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                                </div>
                            ))
                        }
                    </div>

                    <div className="flex flex-items gap-3 w-full overflow-x-scroll mt-4">
                        {
                            doctorSlot.length && doctorSlot[slotIndex].map((item,index) => (
                                <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light px-5 py-2 flex-shrink-0 rounded-full cursor-pointer ${item.time === slotTime? 'bg-primary text-white':'text-gray-400 border border-gray-300'}`} key={index}>
                                    {item.time.toLowerCase()}
                                </p>
                            ))
                        }
                    </div>

                    <button className="bg-primary text-white font-medium px-14 py-5 rounded-full my-6">Book Appointment</button>
                </div>

                {/* -----related doctor---- */}
                <RelatedDoctor doctId={doctId} speciality={docInfo.speciality} />
        </div>
    );
};

export default Appointment;