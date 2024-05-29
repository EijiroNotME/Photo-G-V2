import { NavLink } from "react-router-dom";
import loadingSVG from "../../assets/svg/tube-spinner.svg";
import google from "../../assets/icons/google.png";

import { useState } from "react";
import useSignup from "../../hooks/useSignup";
import useSignupGoogle from "../../hooks/useSignupGoogle";

function SignUpPanel() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [school, setSchool] = useState<string>("");
  const [campus, setCampus] = useState<string>("");
  const [course, setCourse] = useState<string>("");

  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signup(email, password, firstName, lastName, school, campus, course);
  };

  const { errorGoogle, isPendingGoogle, signUpGoogle } = useSignupGoogle();

  const handleSignupGoogle = async () => {
    await signUpGoogle();
  };

  return (
    <div className="w-full h-screen m-0 p-0 overflow-hidden">
      <div className="h-full flex items-center justify-center">
        <div className="w-[95%] sm:w-[65%] md:w-[55%] lg:w-[45%] xl:w-[30%] bg-primaryDarker rounded-2xl border-2 shadow-2xl shadow-gray-600 flex justify-center">
          <div className="my-10 w-full m-20">
            <h1 className="font-bold text-5xl text-secondaryDarker">
              <NavLink to="/">
                Code<span className="text-accent">Pix</span>
              </NavLink>
            </h1>
            <div className="text-base">
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
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-2 my-4">
                  <input
                    className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                    type="text"
                    placeholder="First Name"
                    required
                    onChange={(e) => {
                      setFirstName(e.target.value);
                    }}
                    value={firstName}
                  />
                  <input
                    className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                    type="text"
                    placeholder="Last Name"
                    required
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    value={lastName}
                  />
                  <input
                    className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                    type="text"
                    placeholder="School"
                    required
                    onChange={(e) => {
                      setSchool(e.target.value);
                    }}
                    value={school}
                  />
                  <div className="grid grid-cols-2 gap-1">
                    <input
                      className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                      type="text"
                      placeholder="Campus"
                      required
                      onChange={(e) => {
                        setCampus(e.target.value);
                      }}
                      value={campus}
                    />
                    <input
                      className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                      type="text"
                      placeholder="Course"
                      onChange={(e) => {
                        setCourse(e.target.value);
                      }}
                      value={course}
                    />
                  </div>
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
                  <input
                    className="h-10 rounded-full bg-primaryDarker border-2 border-stone-400 hover:border-secondaryDarker/50 focus:border-accent focus:border-2 focus:outline-none focus:shadow-accent/20 focus:shadow-md px-4"
                    type="password"
                    placeholder="Password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
                  />
                </div>
                {!isPending && (
                  <button className="w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-secondaryDarker/90 transition-all shadow-lg shadow-secondary/30">
                    Sign up
                  </button>
                )}
                {isPending && (
                  <button
                    disabled
                    className="w-full h-10 rounded-full bg-secondary text-white font-semibold hover:bg-secondaryDarker/90 transition-all shadow-lg shadow-secondary/30 flex items-center justify-center"
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
                      Already a member?{" "}
                      <span className="font-bold hover:text-accent transition-all">
                        {" "}
                        <NavLink to="/log-in">Log in</NavLink>
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

export default SignUpPanel;
