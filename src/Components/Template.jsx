import React from "react"
import frameImage from "../assets/frame.png"
import SignupForm from "./SignupForm"
import LoginForm from "./LoginForm"
import { FcGoogle } from "react-icons/fc"

const Template = ({title,desc1,desc2,image,formtype,setIsLoggedIn}) =>{
    return (
        <div className="flex justify-between w-11/12 max-w-[950px] mx-auto py-8 gap-x-12">
            <div className="max-w-[380px] w-11/12" >
                <h1 className="text-zinc-50 font-semibold text-[1.675rem] leading-[2.175rem]">{title}</h1>
                <p className="text-[1.025rem] leading-[1.425rem] mt-3">
                    <span className="text-zinc-100">{desc1}</span>
                    <br />
                    <span className="text-sky-200 italic">{desc2}</span>
                </p>
                {
                    formtype === "signup" ?
                    (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                    (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)
                }
                <div className="w-full flex items-center my-4 gap-x-2">
                    <div className="w-full h-[1px] bg-zinc-600"></div>
                    <p className="text-zinc-700 font-medium leading-[1.375rem]">OR</p>
                    <div className="w-full h-[1px] bg-zinc-600"></div>
                </div>
                <button className="w-full flex justify-center items-center rounded-[8px]
                 font-medium text-zinc-100 border border-zinc-700 px-[12px] py-[8px] mt-6 gap-x-2">
                    <FcGoogle/>
                    <p>Sign Up with Google</p>
                </button>
            </div>
            <div className="relative w-11/12 max-w-[380px] mt-6">
                <img 
                 src={frameImage}
                 alt="pattern"
                 width={508}
                 height={454}
                 loading="lazy"
                />
                <img 
                 src={image}
                 alt="student"
                 width={508}
                 height={440}
                 loading="lazy"
                 className="absolute -top-4 right-4"
                />
            </div>
        </div>
    )
}

export default Template