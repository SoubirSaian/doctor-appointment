// import React from 'react';

import { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

const Profile = () => {
    const [userData,setUserData] = useState({
        name: 'King Edward',
        img: assets.profile_pic,
        email: 'edward.king@gmail.com',
        phone: '+88 01515237252',
        address:{
            line1: '143, Agaram road,Selaiyur',
            line2: 'Chennai-600073,Tamil Nadu, India'
        },
        gender: 'Male',
        dob: '16-12-1998'
    });

    const [isEdit,setIsEdit] = useState(false);

    return (
        <div className="max-w-lg flex- flex-col gap-2 text-sm">
             <img className="w-36 rounded" src={userData.img} alt="img" />
             {
                isEdit ? <input className="bg-gray-50 max-w-60 text-3xl font-medium mt-4" type="text" value={userData.name} onChange={(e) => setUserData(prev => ({...prev,name:e.target.value}))} /> : <p className="text-3xl font-medium text-neutral-300 mt-4">{userData.name}</p>
             }
             <hr  className="bg-zinc-400 h-[1px] border-none"/>

             <div>
                <p className="text-neutral-500 underline mt-3">Contact Information</p>

                <div className="grid grid-cols-[1fr_1fr] gap-y-2.5 mt-3 text-neutral-700">
                    <p className="font-medium">Email : </p>
                    <p className="text-blue-500">{userData.email}</p>
                    <p className="font-medium">Phone : </p>
                    {
                        isEdit ? <input className="bg-gray-100 max-w-52" type="text" value={userData.phone} onChange={(e) => setUserData(prev => ({...prev,phone:e.target.value}))} /> : <p className="text-blue-400">{userData.phone}</p>
                    }

                    <p className="font-medium">Address : </p>
                    {
                        isEdit ? <p>
                            <input className="bg-gray-50" type="text" onChange={(e) => setUserData(prev =>({...prev,address: {...prev.address,line1:e.target.value}}))} value={userData.address.line1} />
                            <br />
                            <input className="bg-gray-50" type="text" onChange={(e) => setUserData(prev => ({...prev,address: {...prev.address,line2:e.target.value}}))} value={userData.address.line2} />
                        </p> : <p className="text-gray-500">
                            {userData.address.line1}
                            <br />
                            {userData.address.line2}
                        </p>
                    }
                </div>
             </div>

             <div>
                <p className="text-neutral-500 underline mt-3">Basic Information</p>

                <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
                    <p className="font-medium">Gender : </p>
                    {
                        isEdit ? <select className="max-w-20 text-gray-100" onChange={(e) => setUserData(prev => ({...prev,gender:e.target.value}))} value={userData.gender}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select> : <p className="text-gray-400">
                            {userData.gender}
                        </p>
                    }

                    <p className="font-medium">DOB :</p>
                    {
                        isEdit ? <input className="max-w-28 bg-gray-100" type="date" onChange={(e) => setUserData(prev => ({...prev,dob:e.target.value}))} value={userData.dob} /> : <p className="text-gray-400">
                            {userData.dob}
                        </p>
                    }
                </div>
             </div>

             <div className="mt-10">
                {
                    isEdit ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white" onClick={() => setIsEdit(false)}>Save Info</button> : <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white" onClick={() => setIsEdit(true)}>
                        Edit
                    </button>
                }
             </div>

        </div>
    );
};

export default Profile;