import React from 'react'
import { Mail, Lock, LogIn } from "lucide-react";

const signin = () => {
  return (
    <div className="h-screen bg-[url('/images/Desktop.png')] bg-cover bg-center flex justify-center items-center">
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl bg-white border border-gray-400 rounded-4xl shadow p-5 m-4">
        
            <div className='text-black'>
                <img src="/images/Logo.png" 
                alt="" 
                srcset="" 
                className='w-20'
                />
            </div>
            <div>
                <p className='text-3xl font-bold '>
                    Signin In To your Account.
                 </p>
                <p className='text-gray-600'>
                    Unleas your court booking online here right now
                </p>
            </div>

            <div className='mt-5'>
                <form action="">
                    <div>
                        <label className='font-bold' htmlFor="">Email Address</label>
                        <div className='border border-gray-400  rounded-full flex gap-2 items-center p-2 mt-2'>
                            < Mail size={20} color='gray'/>
                            <input 
                                type="email" 
                                placeholder='Sotheadev@gmail'
                            />
                        </div> 
                    </div>
                    <div className='mt-2'>
                        <label className='font-bold' htmlFor="">
                                Password
                             </label>
                        <div className='border border-gray-400 rounded-full flex gap-2 items-center p-2 mt-2'>
                            < Lock size={20} color='gray'/>
                            <input 
                                type="password" 
                                placeholder='*******'
                                />
                        </div>
                    </div>
                </form>
            </div>
            <div className='flex gap-2 mt-2 font-medium'>
                <input type="Checkbox" />
                <p>Remember Me for 30 Day </p>
            </div>
            <div className='mt-5'> 
                <button className='flex items-center justify-center bg-[#4F46E5] p-3 w-full text-white font-bold rounded-full'>
                    Sign In 
                    < LogIn size={20} color='white'/>
                </button>
            </div>
            <div className='font-semibold mt-5 text-xs '>
                <div className='flex justify-center items-center' >
                    <p>Dont you have An Account? </p>
                    <a href="" className='text-[#4F46E5]'>
                            sign up 
                    </a>
                </div>
                <div className='flex justify-center '>
                    <a href="" className='text-[#4F46E5]'>
                        Forget Passoword
                    </a>
                </div>
               
            </div>
            <div className='flex justify-center mt-3'>
                <hr />
                <p>
                    Or
                </p>
                <hr />
            </div>
            <div className='font-bold text-xs flex items-center justify-center border-gray-500 border rounded-full p-1 mt-3'>
                <img 
                    src="/images/Google.jpg" 
                    alt="" 
                    sizes={10}
                
                    className='w-9'
                    
                    />
                Sign In with Google
            </div>
        </div>
    </div>
  )
}

export default signin