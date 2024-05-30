import { useState } from "react";
import { NavLink } from "react-router-dom";
import loadingSVG from "../../assets/svg/tube-spinner.svg";
import useResetPassword from "../../hooks/useResetPassword";

function ForgotPasswordPanel() {
  const [email, setEmail] = useState<string>("");

  const { errorReset, isPendingReset, resetPassword, successMessage } =
    useResetPassword();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    resetPassword(email);
    setEmail("");
  };

  return (
    <div className="w-full h-screen m-0 p-0 overflow-hidden">
      <div className="h-full flex items-center justify-center">
        <div className="w-[95%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[30%] bg-primaryDarker rounded-2xl border-2 shadow-2xl shadow-gray-600 flex justify-center">
          <div className="my-10 w-full px-8 sm:px-10 md:px-14 lg:px-20">
            <h1 className="font-bold text-5xl text-secondaryDarker">
              <NavLink to="/">
                Code<span className="text-accent">Pix</span>
              </NavLink>
            </h1>
            <h3 className="text-2xl text-secondaryDarker/80 font-semibold">
              Password Reset
            </h3>
            {errorReset && (
              <p className="text-red-500 text-center font-semibold my-3">
                {errorReset}
              </p>
            )}
            {successMessage && (
              <p className="text-green-500 text-center font-semibold my-3">
                {successMessage}
              </p>
            )}

            <div className="text-base">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-2 my-4">
                  <input
                    className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                </div>
                {!isPendingReset && (
                  <button className="mt-3 w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-secondaryDarker/90 transition-all shadow-lg shadow-secondary/30">
                    Reset Password
                  </button>
                )}
                {isPendingReset && (
                  <button
                    disabled
                    className="mt-3 w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-secondaryDarker/90 transition-all shadow-lg shadow-secondary/30 flex items-center justify-center"
                  >
                    <img src={loadingSVG} alt="Loading" className="w-8 h-8" />
                  </button>
                )}
              </form>
              <div className="grid grid-cols-1 gap-2 my-5">
                <div className="my-3 text-xs">
                  <div className="my-2">
                    <span>
                      Not on CodePix yet?{" "}
                      <span className="font-bold hover:text-accent transition-all">
                        {" "}
                        <NavLink to="/sign-up">Sign up</NavLink>
                      </span>
                    </span>
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

export default ForgotPasswordPanel;
