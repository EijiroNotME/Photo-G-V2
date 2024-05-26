import { NavLink } from "react-router-dom";

function LandingMenu() {
  return (
    <div className='w-full h-full m-auto'>
      <div className='flex h-screen'>
        {/* This is the box */}
        <div className="relative items-center m-auto w-[80%] h-[35%] bg-primaryDarker rounded-2xl border-2 shadow-2xl shadow-gray-600"> 
          <div className="absolute bottom-4 right-4 text-black mx-5">
            <ul className="flex gap-4 p-2 font-semibold">
              <li className="flex-1">
                <div className="p-2 h-full flex items-center justify-center min-w-[80px]
                transition-all hover:text-accent hover:underline-offset-8 hover:underline
                ">
                  <NavLink to="" className="w-full text-center">About</NavLink>
                </div>
              </li>
              <li className="flex-1">
                <div className="p-2 h-full flex items-center justify-center min-w-[80px]
                transition-all hover:text-accent hover:underline-offset-8 hover:underline
                ">
                  <NavLink to="" className="w-full text-center">Photos</NavLink>
                </div>
              </li>
              <li className="flex-1">
              <div className="bg-accent rounded-md p-2 h-full flex items-center justify-center text-primary min-w-[80px] shadow-lg shadow-slate-400
                hover:shadow-slate-600 transition-all duration-300 hover:bg-primaryDarker hover:text-secondary
                ">
                <NavLink to="/sign-up" className="w-full text-center">Sign Up</NavLink>
              </div>
              </li>
              <li className="flex-1">
                <div className="bg-secondary rounded-md p-2 h-full flex items-center justify-center text-primary min-w-[80px] shadow-lg shadow-slate-400
                hover:shadow-slate-600 transition-all duration-300 hover:bg-primaryDarker hover:text-secondary
                ">
                  <NavLink to="/log-in" className="w-full text-center">Log In</NavLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LandingMenu;
