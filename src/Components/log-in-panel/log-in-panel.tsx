import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import facebook from '../../assets/icons/facebook (white).png';
import google from '../../assets/icons/google.png';

function LogInPanel() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="w-full h-screen m-0 p-0 overflow-hidden">
      <div className="h-full flex items-center justify-center">
        <div className="w-[95%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[30%] h-[100vh] xl:h-[95%] bg-primaryDarker rounded-2xl border-2 shadow-2xl shadow-gray-600 flex justify-center">
          <div className="my-10 w-full px-8 sm:px-10 md:px-14 lg:px-20">
            <h1 className="font-bold text-5xl text-secondaryDarker">Code<span className="text-accent">Pix</span></h1>
            <h3 className="text-2xl text-secondaryDarker/80 font-semibold">Log in to see more</h3>
            <div className="text-base">
              <div className="grid grid-cols-1 gap-2 my-4">
                <input
                  className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                  type="text"
                  placeholder="Username"
                />
                <div className="relative">
                  <input
                    className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4 pr-10 w-full"
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <div onClick={togglePasswordVisibility} className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-stone-400 hover:text-secondaryDarker/50">
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </div>
                </div>
              </div>
              <div className="text-left font-bold text-sm hover:text-accent transition-all">
                <NavLink to="/forgot-password">Forgot Password?</NavLink>
              </div>

              <div className="grid grid-cols-1 gap-2 my-5">
                <button className="w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-secondaryDarker/90 transition-all shadow-lg shadow-secondary/30">Log in</button>
                <div className="text-center font-bold">
                  <h1>OR</h1>
                </div>
                <div className="grid grid-cols-1 gap-2 my-1 text-[10px] sm:text-[12px] md:text-xs">
                  <button className="w-full h-10 relative rounded-full text-primary bg-accent border font-semibold hover:bg-accent/80 transition-all flex items-center justify-center">
                    <img src={facebook} alt="Facebook icon" className="absolute left-4 h-5 w-5" />
                    <span>Continue with Facebook</span>
                  </button>
                  <button className="w-full h-10 relative rounded-full text-secondary bg-primaryDarker border border-gray-300 font-semibold hover:bg-primaryDarker100 transition-all flex items-center justify-center">
                    <img src={google} alt="Google icon" className="absolute left-4 h-5 w-5" />
                    <span>Continue with Google</span>
                  </button>
                </div>

                <div className='my-3 text-xs'>
                  <span>By continuing, you agree to CodePix,<span className='font-bold'> Terms of Service, Privacy Policy</span></span>
                  <div className='my-2'>
                    <span>Not on CodePix yet? <span className='font-bold hover:text-accent transition-all'> <NavLink to="/sign-up">Sign up</NavLink></span></span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogInPanel;
