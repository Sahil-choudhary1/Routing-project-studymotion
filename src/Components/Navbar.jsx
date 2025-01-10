import React from "react"
import Logo from "../assets/Logo.svg"
import { Link } from "react-router-dom"
import { toast } from "react-hot-toast"

const Navbar = (props) => {

    let IsLoggedIn = props.IsLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;
    return (
        <div className="flex justify-between items-center w-11/12 max-w-[950px] mx-auto py-4">

            <Link to="/" >
               <img src={Logo} alt="Logo" width={160} height={32} loading="lazy"/>
            </Link>

            <nav>
              <ul className="text-white flex gap-x-6">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="/">Contact</Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-x-4">
                { !IsLoggedIn &&
                    <Link to="/login">
                        <button className="bg-zinc-900 text-white py-[8px]
                         px-[12px] rounded-[8px] border border-zinc-700"
                        >Log in</button>
                    </Link>
                }
                { !IsLoggedIn &&
                    <Link to="/signup">
                        <button className="bg-zinc-900 text-white py-[8px]
                         px-[12px] rounded-[8px] border border-zinc-700"
                        >Sign up</button>
                    </Link>
                }
                { IsLoggedIn &&
                    <Link to="/">
                        <button className="bg-zinc-900 text-white py-[8px]
                         px-[12px] rounded-[8px] border border-zinc-700"
                             onClick={()=>{
                            setIsLoggedIn(false);
                            toast.success("Logged Out");
                        }}>Log out</button>
                    </Link>
                }
                { IsLoggedIn &&
                    <Link to="/dashboard">
                        <button className="bg-zinc-900 text-white py-[8px]
                         px-[12px] rounded-[8px] border border-zinc-700">Dashboard</button>
                    </Link>
                }
            </div>

        </div>
    )
}

export default Navbar;