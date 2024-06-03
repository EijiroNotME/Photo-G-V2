import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import loadingSVG from "../../assets/svg/tube-spinner.svg";

import google from "../../assets/icons/google.png";

import useSignupGoogle from "../../hooks/useSignupGoogle";
import useLogin from "../../hooks/useLogin";

function LogInPanel() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);

  const { errorGoogle, isPendingGoogle, signUpGoogle } = useSignupGoogle();
  const { login, isPending, error } = useLogin();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignupGoogle = async () => {
    await signUpGoogle();
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="w-full h-screen m-0 p-0 overflow-hidden">
      <div className="h-full flex items-center justify-center">
        <div className="w-[95%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[23%] bg-primaryDarker rounded-2xl border-2 shadow-2xl shadow-gray-600 flex justify-center">
          <div className="my-10 w-full px-8 sm:px-10 md:px-14 lg:px-20">
            <h1 className="font-bold text-5xl text-secondaryDarker">
              <NavLink to="/">
                Code<span className="text-accent">Pix</span>
              </NavLink>
            </h1>
            <h3 className="text-2xl text-secondaryDarker/80 font-semibold">
              Log in to see more
            </h3>
            {error && (
              <p className="text-red-500 text-center font-semibold my-3">
                {error}
              </p>
            )}
            {errorGoogle && (
              <p className="text-red-500 text-center font-semibold my-3">
                {errorGoogle}
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
                  <div className="relative">
                    <input
                      className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4 pr-10 w-full"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      required
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      value={password}
                    />
                    <div
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-xl text-stone-400 hover:text-secondaryDarker/50"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </div>
                  </div>
                </div>
                <div className="text-left font-bold text-sm hover:text-accent transition-all">
                  <NavLink to="/forgot-password">Forgot Password?</NavLink>
                </div>
                {!isPending && (
                  <button className="mt-3 w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-secondaryDarker/90 transition-all shadow-lg shadow-secondary/30">
                    Log in
                  </button>
                )}
                {isPending && (
                  <button
                    disabled
                    className="mt-3 w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-secondaryDarker/90 transition-all shadow-lg shadow-secondary/30 flex items-center justify-center"
                  >
                    <img src={loadingSVG} alt="Loading" className="w-8 h-8" />
                  </button>
                )}
              </form>
              <div className="grid grid-cols-1 gap-2 my-5">
                <div className="text-center font-bold">
                  <h1>OR</h1>
                </div>
                <div className="grid grid-cols-1 gap-2 my-1 text-[10px] sm:text-[12px] md:text-xs">
                  {!isPendingGoogle && (
                    <button
                      onClick={handleSignupGoogle}
                      className="w-full h-10 relative rounded-full text-secondary bg-primaryDarker100 border-gray-300 font-semibold hover:bg-primaryDarker100/80 transition-all flex items-center justify-center shadow-md shadow-secondary/20"
                    >
                      <img
                        src={google}
                        alt="Google icon"
                        className="absolute left-4 h-5 w-5"
                      />
                      <span>Continue with Google</span>
                    </button>
                  )}
                  {isPendingGoogle && (
                    <button
                      disabled
                      onClick={handleSignupGoogle}
                      className="w-full h-10 relative rounded-full text-secondary bg-primaryDarker100 border-gray-300 font-semibold hover:bg-primaryDarker100/80 transition-all flex items-center justify-center shadow-md shadow-secondary/20"
                    >
                      <img src={loadingSVG} alt="Loading" className="w-8 h-8" />
                    </button>
                  )}
                </div>

                <div className="my-3 text-xs">
                  <span>
                    By continuing, you agree to CodePix,
                    <span className="font-bold">
                      {" "}
                      Terms of Service, Privacy Policy
                    </span>
                  </span>
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

export default LogInPanel;
