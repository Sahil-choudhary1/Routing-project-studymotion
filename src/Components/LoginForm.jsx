import React, { useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineEye , AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = ({setIsLoggedIn}) => {

    const navigate = useNavigate();

    const [formData,setFormData] = useState({
        email:"",password:""
    })

    const[showPassword,setShowPassword] = useState(false);

    function changehandler(event){
        setFormData((prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    function submitHandler(event) {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Login Success");
        navigate("/dashboard");
    }

    return(
        <form 
        className="flex flex-col w-full gap-y-4 mt-6"
        onSubmit={submitHandler}>
            <label className="w-full">
                <p className="text-[0.875rem] text-zinc-50 mb-1 leading-[1.375rem]"
                >Email Address <sup className="text-pink-500">*</sup></p>
                <input
                  required 
                  type="email"
                  value={formData.email}
                  onChange={changehandler}
                  placeholder="Enter Email Address"
                  name="email"
                  className="bg-zinc-800 rounded-[0.5rem] text-zinc-50 p-[12px] w-full mt-1"
                 />
            </label>
            <label className="w-full relative">
                <p className="text-[0.875rem] text-zinc-50 mb-1 leading-[1.375rem]"
                >Password <sup className="text-pink-500">*</sup></p>
                <input
                  required 
                  type={showPassword ? ("text"):("password")}
                  value={formData.password}
                  onChange={changehandler}
                  placeholder="Enter Password"
                  name="password"
                  className="bg-zinc-800 rounded-[0.5rem] text-zinc-50 p-[12px] w-full mt-1"
                 />
                 <span className="absolute right-3 top-[42px] cursor-pointer"
                 onClick={()=> setShowPassword((prev)=>!prev)}>
                    {showPassword ? 
                    (<AiOutlineEyeInvisible fontSize={25} fill="#AFB2BF"/>):
                    (<AiOutlineEye fontSize={25} fill="#AFB2BF"/>)}
                 </span>

                 <Link to="#">
                    <p className="text-xs mt-1 text-sky-200 max-w-max ml-auto">Forgot password?</p>
                 </Link> 
            </label>

            <button className="font-medium bg-yellow-400 text-black rounded-[8px] px-[12px] py-[8px]">Sign In</button>
        </form>
    )
}

export default LoginForm