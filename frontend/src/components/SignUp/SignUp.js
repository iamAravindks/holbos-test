import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import { IMAGES } from "../../utils";

const SignUp = () => {
  return (
    <div className="min-w-full min-h-screen  flex flex-col lg:flex-row">
      <div className="flex-1 flex-col  gap-7   2 lg:flex-1 lg:max-h-full ">
        <h1 className="text-3xl w-full font-extrabold my-6  flex items-center justify-center lg:h-[200px]">
          WELCOME
        </h1>
        <div className="w-full  my-2  flex items-center justify-center">
          <img
            src={IMAGES.signUp}
            loading="lazy"
            alt="signup"
            className="w-[50%] h-[50%] lg:w-[70%] lg:h-[70%] "
          />
        </div>
      </div>
      <div className="flex-[2] bg-dim min-h-full w-full flex justify-center items-center   lg:flex-1">
        <form className="flex flex-col gap-6  p-6 justify-center items-center">
          <div className="w-full flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-primary w-full max-w-xs"
              id="email"
              required
            />
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered input-primary w-full max-w-xs"
              id="password"
              required
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="rePassword">Re-enter Password</label>
            <input
              type="password"
              placeholder="Enter password again"
              className="input input-bordered input-primary w-full max-w-xs pr-8"
              id="rePassword"
              required
            />
            <div className="absolute  top-1/2 right-2 cursor-pointer active:bg-base-200 hover:bg-base-300 duration-300 rounded-full p-1">
              <MdVisibilityOff className="text-primary w-5 h-5" />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-wide text-white">
            SignUp
          </button>
          <div className="w-full text-center">
            <p className="text-sm font-extralight ">
              Already have an account ? <a href="#">Login </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
