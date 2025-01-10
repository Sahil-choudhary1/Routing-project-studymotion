import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {toast} from "react-hot-toast"
import { useNavigate } from 'react-router-dom';


const SignupForm = ({setIsLoggedIn}) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [accountType, setAccountType] = useState("student");

    function changeHandler(event) {

        setFormData( (prevData) =>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ) )

    }

    function submitHandler(event) {
        event.preventDefault();
        if(formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return ;
        }

        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };

        const finalData = {
            ...accountData,
            accountType
        }

        console.log("printing Final account data ");
        console.log(finalData);

        navigate("/dashboard");

    }


  return (
    <div>
        {/* student-Instructor tab */}
        <div
        className='flex bg-zinc-950 p-0.5 gap-x-1 my-4 rounded-full max-w-max border border-zinc-700'>

            <button
            className={`${accountType === "student" 
            ?
              "bg-zinc-800 text-white"
            :"bg-transparent text-zinc-200"} text-zinc-50 py-2 px-5 rounded-full transition-all duration-200`}
            onClick={()=> setAccountType("student")}>
                Student
            </button>

            <button
            className={`${accountType === "instructor" 
            ?
              "bg-zinc-800 text-white"
            :"bg-transparent text-zinc-200"} text-zinc-50 py-2 px-5 rounded-full transition-all duration-200`}
            onClick={() => setAccountType("instructor")}>
                Instructor
            </button>
        </div>

        <form
        className="flex flex-col w-full gap-y-4 mt-6"
        onSubmit={submitHandler} >
        {/* first name and lastName */}
            <div className='flex gap-x-2'>
                    <label className='w-full'>
                        <p className="text-[0.875rem] text-zinc-50 mb-1 leading-[1.375rem]" >
                            First Name<sup className='text-pink-500'>*</sup>
                        </p>
                        <input
                            required
                            type="text"
                            name="firstName"
                            onChange={changeHandler}
                            placeholder="Enter First Name"
                            value={formData.firstName}
                            className="bg-zinc-800 rounded-[0.5rem] text-zinc-50 p-[10px] w-full mt-1"
                        />
                    </label>

                    <label className='w-full'>
                        <p className="text-[0.875rem] text-zinc-50 mb-1 leading-[1.375rem]"
                         >Last Name<sup className='text-pink-500'>*</sup></p>
                        <input
                            required
                            type="text"
                            name="lastName"
                            onChange={changeHandler}
                            placeholder="Enter Last Name"
                            value={formData.lastName}
                            className="bg-zinc-800 rounded-[0.5rem] text-zinc-50 p-[10px] w-full mt-1"
                        />
                    </label>
            </div>
            {/* email Add */}
            <div >
            <label className='w-full'>
                    <p className="text-[0.875rem] text-zinc-50 mb-1 leading-[1.375rem]"
                    >Email Address<sup className='text-pink-200'>*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        onChange={changeHandler}
                        placeholder="Enter Email Address "
                        value={formData.email}
                        className="bg-zinc-800 rounded-[0.5rem] text-zinc-50 p-[10px] w-full mt-1"
                    />
            </label>
            </div>
            

            {/* createPassword and Confirm Password */}
            <div className='flex gap-x-2'>
                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-zinc-50 mb-1 leading-[1.375rem]"
                    >Create Password<sup className='text-pink-500'>*</sup></p>
                    <input
                        required
                        type= {showPassword ? ("text") : ("password")}
                        name="password"
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        value={formData.password}
                        className="bg-zinc-800 rounded-[0.5rem] text-zinc-50 p-[10px] w-full mt-1"
                    />
                    <span
                      className="absolute right-3 top-[42px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ? 

                        (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                        (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>

                <label className='w-full relative'>
                    <p className="text-[0.875rem] text-zinc-50 mb-1 leading-[1.375rem]"
                    >Confirm Password<sup className='text-pink-500'>*</sup></p>
                    <input
                        required
                        type= {showConfirmPassword ? ("text") : ("password")}
                        name="confirmPassword"
                        onChange={changeHandler}
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        className="bg-zinc-800 rounded-[0.5rem] text-zinc-50 p-[10px] w-full mt-1"
                    />
                    <span 
                     className="absolute right-3 top-[42px] cursor-pointer"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}>
                        {showConfirmPassword ?

                         (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

                         (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
                    </span>
                </label>
            </div>
        <button  className="font-medium bg-yellow-400 text-black rounded-[8px] px-[12px] py-[8px]">
            Create Account
        </button>
        </form>

    </div>
  )
}

export default SignupForm