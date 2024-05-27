import { NavLink } from "react-router-dom";
import { FaRegQuestionCircle } from "react-icons/fa";

function LandingMenu() {
  return (
    <div className='w-full h-full'>
  <div className='flex h-dvh items-center justify-center'>
    {/* This is the box */}
    <div className="relative m-auto w-[100%] h-[100%] bg-primaryDarker/90 rounded-2xl border-2 shadow-2xl shadow-secondary/5
                    md:w-[90%] md:h-[85%]
                    lg:w-[80%] lg:h-[80%]
                    xl:w-[75%] xl:h-[760]
    "> 
     
      <div className="absolute top-4 right-4">
        <button className="p-1">
          <NavLink to="/about">
            <FaRegQuestionCircle className="text-2xl hover:text-accent transition-all ease-in-out duration-300" />
          </NavLink>
        </button>
      </div>

      <div className="flex-col flex h-full items-center justify-center text-center m-auto p-4
      md:mx-40
      lg:mx-60
      xl:mx-80
      ">
        <h2 className="text-2xl sm:text-3xl font-semibold">Welcome to</h2>
        <h1 className="font-bold text-6xl sm:text-7xl md:text-8xl  text-secondaryDarker">
          Code<span className="text-accent">Pix</span>
        </h1>
        <p className="text-sm">
          Join a community of students who love to capture and share their campus life. Preserve your precious college memories and share them with friends and family.
        </p>

        <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="p-2 rounded-lg max-w-[120px] shadow-md shadow-secondaryDarker/50
          text-primary font-semibold bg-accent
          hover:bg-primaryDarker hover:text-secondary transition-all ease-out duration-300       

          ">
            <button> <NavLink to="/sign-up">Sign Up</NavLink></button>
          </div>
          <div className="p-2 rounded-lg max-w-[120px] shadow-md shadow-secondaryDarker/50
          text-primary font-semibold bg-secondary
          hover:bg-primaryDarker hover:text-secondary transition-all ease-out duration-300

          ">
            <button> <NavLink to="/log-in">Log In</NavLink></button>
          </div>
         

        </div>
      </div>
      
      {/* For Buttons */}

    </div>
  </div>
</div>

  );
}

export default LandingMenu;
