import { NavLink } from "react-router-dom";

import facebook from '../../assets/icons/facebook (white).png';
import google from '../../assets/icons/google.png';


function SignUpPanel() {
    return (
      <div className="w-full h-screen m-0 p-0 overflow-hidden">
        <div className="h-full flex items-center justify-center">
          <div className="w-[35%] h-[90%] bg-primaryDarker rounded-2xl border-2 shadow-2xl shadow-gray-600 flex justify-center">
            <div className="my-10 w-full m-20">
              <h1 className="font-bold text-5xl text-secondaryDarker">Code<span className="text-accent">Pix</span></h1>
              <div className="grid grid-cols-1 gap-2 my-4">
                <input className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/30 focus:shadow-md px-4" type="text" placeholder="Username"/>
                <input className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/30 focus:shadow-md px-4" type="text" placeholder="Create Password"/>
                <input className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/30 focus:shadow-md px-4" type="text" placeholder="School"/>
                <div className="grid grid-cols-2 gap-2">
                    <input className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/30 focus:shadow-md px-4" type="text" placeholder="Campus"/>
                    <input className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/30 focus:shadow-md px-4" type="text" placeholder="Course"/>
                </div>
                
              </div>
              <div className="grid grid-cols-1 gap-2 my-5">
               
                <button className="w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-accent/75 transition-all shadow-lg shadow-secondary/30">Continue</button>
                <div className="text-center font-bold">
                    <h1>OR</h1>
                </div>
                <div className="grid grid-cols-1 gap-2 my-1">
                <button className="w-full h-10 relative rounded-full text-primary bg-accent border border-gray-400 font-semibold hover:bg-primaryDarker100 transition-all flex items-center justify-center">
                  <img src={facebook} alt="Facebook icon" className="absolute left-4 h-5 w-5"/>
                  <span>Continue with Facebook</span>
                </button>
                <button className="w-full h-10 relative rounded-full text-secondary bg-primaryDarker border border-gray-400 font-semibold hover:bg-primaryDarker100 transition-all flex items-center justify-center">
                  <img src={google} alt="Google icon" className="absolute left-4 h-5 w-5" />
                  <span>Continue with Google</span>
                </button>
              </div>

              <div className='my-3 text-xs'>
                <span>By continuing, you agree to CodePix,<span className='font-bold'> Terms of Service, Privacy Policy</span></span>
                <div className='my-2'>
                    <span>Already a member? <span className='font-bold'> <NavLink to="/log-in">Log in</NavLink></span></span>
                </div>
              </div>
             

              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default SignUpPanel;
  