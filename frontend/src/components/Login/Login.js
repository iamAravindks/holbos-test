import { useState } from "react";
import { Link } from "react-router-dom";
import { IMAGES } from "../../utils";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [details, setDetails] = useState(initialState);

  const handleFormDetails = (e) =>
    setDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

  return (
    <div className="min-w-full min-h-screen  flex flex-col lg:flex-row">
      <div className="flex-[2] bg-dim min-h-full w-full flex justify-center items-center order-3 lg:order-1 lg:flex-1 animate-side-right">
        <form className="flex flex-col gap-6  p-6 justify-center items-center">
          <div className="w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-primary w-full max-w-xs"
              id="email"
              required
              value={details.email}
              onChange={handleFormDetails}
            />
          </div>

          <div className="w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Your Password"
              className="input input-bordered input-primary w-full max-w-xs"
              id="password"
              required
              value={details.password}
              onChange={handleFormDetails}
            />
          </div>
          <button type="submit" className="btn btn-primary btn-wide text-white">
            Login
          </button>
          <div className="w-full text-center">
            <p className="text-sm font-extralight ">
              New here ?{" "}
              <Link className="text-primary" to="/signup">
                Sign up{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
      <div className="flex-1 flex-col  gap-7 order-2  lg:order-2 lg:flex-1 lg:max-h-full animate-side-left">
        <h1 className="text-3xl w-full font-extrabold my-6  flex items-center justify-center lg:h-[200px]">
          WELCOME BACK
        </h1>
        <div className="w-full  my-2  flex items-center justify-center">
          <img
            src={IMAGES.login}
            loading="lazy"
            alt="login"
            className="w-[50%] h-[50%] lg:w-[70%] lg:h-[70%] "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
