// import React from 'react';

import { useState } from "react";

const Login = () => {
    const [state,setState] = useState('Sign Up');
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onSubmitHandler = async (evt) => {
        evt.preventDefault();

    }


    return (
        <form className="w-[48vh] m-auto flex flex-col items-center px-[48px] py-6 border rounded-lg shadow-md" onSubmit={onSubmitHandler}>
             <div className="m-auto my-6 flex- flex-col items-start gap-3 px-8 min-w-[360px] sm:min-w-96 text-sm text-zinc-600">
                <p className="text-2xl font-semibold">{state === 'Sign Up'? 'Create Account' : 'Login'}</p>
                <p>Please {state === 'Sign Up' ? 'Sign Up' : 'Log In'} to book appointment</p>
             </div>

             { state === 'Sign Up' ? <div className="w-full">
                <p>Full Name</p>
                <input className="w-full border border-zinc-300 rounded p-2 mt-1" type="text" value={name} onChange={(e) => setName(e.target.value)} />
             </div> : <div></div> }

             <div className="w-full">
                <p>Email</p>
                <input className="w-full border border-zinc-300 rounded p-2 mt-1" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
             </div>

             <div className="w-full">
                <p>Password</p>
                <input className="w-full border border-zinc-300 rounded p-2 mt-1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
             </div>

             <button className="w-full bg-primary text-white my-6 py-2 rounded-md  text-base" type="submit">{state === 'Sign Up' ? 'Create Account' : 'Log In'}</button>

             {
                state === 'Sign Up' ? <p>
                    Already have an account. <span className="text-primary cursor-pointer" onClick={() => setState('Login')}>Login Here</span>
                </p> : <p>Dont have any account <span className="text-primary cursor-pointer" onClick={() => setState('Sign Up')}>Sign Up here</span></p>
             }
        </form>
    );
};

export default Login;