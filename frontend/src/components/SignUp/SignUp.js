import { useContext, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import { IMAGES } from "../../utils";
import Context from "../../context/Context";
import { useEffect } from "react";

const SignUp = () => {
  const { signUp, userInfo } = useContext(Context);

  const navigate = useNavigate();
  useEffect(() => {
    if (userInfo?._id) {
      navigate("/");
    }
  }, [navigate, userInfo?._id]);
  const disciplines = ["CSE", "EEE", "ECE", "ME", "CE"];
  const initialState = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    error: null,
    hidden: true,
    discipline: "CSE",
  };
  const [details, setDetails] = useState(initialState);

  const handleFormDetails = (e) => {
    setDetails((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    if (e.target.id === "password" && details.rePassword) {
      setDetails((prev) => ({
        ...prev,
        error: prev.password !== prev.rePassword,
      }));
    }
  };

  const handleRePassword = (e) => {
    setDetails((prev) => ({
      ...prev,
      rePassword: e.target.value,
      error: prev.password !== e.target.value,
    }));
  };

  const toggleVisibility = () =>
    setDetails((prev) => ({ ...prev, hidden: !prev.hidden }));

  const onClickHandler = (e) => {
    e.preventDefault();
    const { name, email, discipline, password, rePassword } = details;

    if (!name || !email || !discipline || !password || !rePassword) {
      alert("fill the details correctly");
      return;
    }
    signUp(name, email, discipline, password);
  };

  return (
    <div className="min-w-full min-h-screen  flex flex-col lg:flex-row">
      <div className="flex-1 flex-col  gap-7   2 lg:flex-1 lg:max-h-full animate-side-left">
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
      <div className="flex-[2] bg-dim min-h-full w-full flex justify-center items-center   lg:flex-1 animate-side-right">
        <form className="flex flex-col gap-6  p-6 justify-center items-center">
          <div className="w-full flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full max-w-xs"
              id="name"
              required
              value={details.name}
              onChange={handleFormDetails}
            />
          </div>
          <div className="w-full flex flex-col">
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

          <div className="w-full flex flex-col">
            <label htmlFor="discipline">Choose Discipline</label>

            <select
              className="select select-bordered max-w-3xl "
              value={details.discipline}
              onChange={handleFormDetails}
              id="discipline"
              required
            >
              {disciplines.map((item, ind) => (
                <option key={ind}>{item}</option>
              ))}
            </select>
          </div>

          <div className="w-full flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type={details.hidden ? "password" : "text"}
              placeholder="Your Password"
              className="input input-bordered input-primary w-full max-w-xs"
              id="password"
              required
              value={details.password}
              onChange={handleFormDetails}
            />
          </div>
          <div className="w-full flex flex-col relative">
            <label htmlFor="rePassword">Re-enter Password</label>
            <input
              type={details.hidden ? "password" : "text"}
              placeholder="Enter password again"
              className={`input input-bordered ${
                details.error ? "input-error" : "input-primary"
              } w-full max-w-xs pr-8`}
              id="rePassword"
              required
              value={details.rePassword}
              onChange={handleRePassword}
              onBlur={handleRePassword}
            />
            <div
              className="absolute  top-1/2 right-2 cursor-pointer active:bg-base-200 hover:bg-base-300 duration-300 rounded-full p-1"
              onClick={toggleVisibility}
            >
              {details.hidden ? (
                <MdVisibilityOff className="text-primary w-5 h-5" />
              ) : (
                <MdVisibility className="text-primary w-5 h-5" />
              )}
            </div>
          </div>
          {details.error !== null && details.error ? (
            <p className="text-red-600">Password must be same</p>
          ) : (
            <></>
          )}
          <button
            type="submit"
            className="btn btn-primary btn-wide text-white"
            disabled={details.error ? true : false}
            onClick={onClickHandler}
          >
            SignUp
          </button>
          <div className="w-full text-center">
            <p className="text-sm font-extralight ">
              Already have an account ?{" "}
              <Link className="text-primary" to="/login">
                Login{" "}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
