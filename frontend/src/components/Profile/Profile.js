import React, { useContext, useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import Context from "../../context/Context";
import { getColor } from "../../utils";
import { IoCloseCircleOutline } from "react-icons/io5";

const Profile = () => {
  const { userInfo, updateProfile } = useContext(Context);
  const color = getColor(userInfo?.name + userInfo?.email);
  const [edit, setEdit] = useState(false);
  const { name = "", email = "", skillSets = [], discipline = "" } = userInfo;
  const initialSkills = [
    ...new Set(
      [
        "Software development",
        "Database design and management",
        "Data structures and algorithms",
        "Object-oriented programming",
        "Web development",
        "Front-end development",
        "Back-end development",
        "API design and implementation",
        "Mobile app development",
        "Networking and security",
        "Cloud computing",
        "DevOps",
        "Agile development methodologies",
        "Project management",
        "Technical writing and documentation",
        "Collaboration and teamwork",
        "Communication and interpersonal skills",
        "Problem-solving and analytical thinking",
        "Attention to detail",
        "Continuous learning and professional development",
      ].map((item) => item.toLowerCase()),
      [...skillSets].map((item) => item.toLowerCase())
    ),
  ].sort();

  const [defaultSkills, setDefaultSkills] = useState(initialSkills);
  const [disciplines, setDisciplines] = useState([
    "CSE",
    "EEE",
    "ECE",
    "ME",
    "CE",
  ]);

  const initialState = {
    name: name,
    email: email,
    password: "",
    rePassword: "",
    error: null,
    hidden: true,
    skills: skillSets,
    discipline: discipline,
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

  const toggleMode = () => setEdit((prev) => !prev);

  const skillHandler = (e) => {
    setDetails((prev) => ({
      ...prev,
      skills: [...prev.skills, e.target.value],
    }));

    setDefaultSkills((prev) => {
      const newSkills = prev.filter((item) => item !== e.target.value);
      return newSkills;
    });
  };

  const quitEditingHandler = () => {
    setDetails(initialState);
    setDefaultSkills(initialSkills);
    toggleMode();
  };

  const profileUpdateHandler = (e) => {
    e.preventDefault();
    const { name, email, discipline, password, skills } = details;

    if (password.length > 0)
      updateProfile(name, email, discipline, skills, password);
    else updateProfile(name, email, discipline, skills);
  };

  const ProfileView = () => {
    return (
      <div className="max-w-[600px] flex flex-col gap-4 ">
        <h1 className="text-5xl  w-full text-center">{name}</h1>
        <div className="flex gap-6 justify-between items-center  w-full ">
          <h4 className="text-lg  w-full ">Email:</h4>
          <h4 className="text-lg text-info  w-full ">{email}</h4>
        </div>
        <div className="flex gap-6 justify-between items-center  w-full ">
          <h4 className="text-lg  w-full ">Discipline:</h4>
          <h4 className="text-lg text-info  w-full ">{discipline}</h4>
        </div>
        <div className="flex gap-6 justify-between items-center  w-full ">
          <h2 className="text-lg">Skills:</h2>
          {skillSets.map((skill, ind) => (
            <p key={ind} className="text-success card shadow-md p-3">
              {skill}
            </p>
          ))}
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-wide text-white"
          disabled={details.error ? true : false}
          onClick={toggleMode}
        >
          edit
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col justify-center items-center  min-h-screen gap-4 m-1 mt-10 lg:m-0 py-4">
      <div className="avatar cursor-pointer">
        <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
          <div
            className={`w-full h-full flex items-center justify-center bg-[${color}]`}
            style={{ background: color }}
          >
            {`${name.charAt(0)}${email.charAt(0)}`}
          </div>
        </div>
      </div>

      {edit ? (
        <form
          className="flex gap-6 flex-wrap p-6 justify-center items-center w-full"
          onSubmit={profileUpdateHandler}
        >
          <div className="min-w-full flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered input-primary w-full max-w-3xl"
              id="name"
              value={details.name}
              onChange={handleFormDetails}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered input-primary w-full max-w-3xl"
              id="email"
              value={details.email}
              onChange={handleFormDetails}
            />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="discipline">Discipline</label>

            <select
              className="select select-bordered max-w-3xl "
              value={details.discipline}
              onChange={handleFormDetails}
              id="discipline"
            >
              {disciplines.map((item, ind) => (
                <option key={ind}>{item}</option>
              ))}
            </select>
          </div>
          <div className="w-full flex gap-6 flex-wrap">
            <div className="w-full md:max-w-max flex flex-col">
              <label htmlFor="password">New Password</label>
              <input
                type={details.hidden ? "password" : "text"}
                placeholder="Your Password"
                className="input input-bordered input-primary w-full "
                id="password"
                value={details.password}
                onChange={handleFormDetails}
              />
            </div>

            <div className="w-full flex flex-col relative md:max-w-max">
              <label htmlFor="rePassword">Re-enter Password</label>
              <div className="relative">
                <input
                  type={details.hidden ? "password" : "text"}
                  placeholder="Enter password again"
                  className={`input input-bordered ${
                    details.error ? "input-error" : "input-primary"
                  } w-full  pr-8`}
                  id="rePassword"
                  value={details.rePassword}
                  onChange={handleRePassword}
                  onBlur={handleRePassword}
                />
                <div
                  className="absolute top-[25%] right-0 cursor-pointer active:bg-base-200 hover:bg-base-300 duration-300 rounded-full p-1"
                  onClick={toggleVisibility}
                >
                  {details.hidden ? (
                    <MdVisibilityOff className="text-primary w-5 h-5" />
                  ) : (
                    <MdVisibility className="text-primary w-5 h-5" />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Choose the skills you have</span>
                <span className="label-text-alt">Alt label</span>
              </label>
              <select
                className="select select-bordered"
                onChange={skillHandler}
              >
                <option disabled selected>
                  Select skill
                </option>
                {defaultSkills.map((item, ind) => (
                  <option key={ind}>{item}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex w-full flex-wrap items-center gap-2">
            <h4 className="text-lg">Skills:</h4>
            <div className="flex flex-wrap gap-2">
              {details.skills.map((tag, ind) => (
                <div
                  key={ind}
                  className="badge badge-secondary badge-outline mx-3 flex justify-around items-center w-auto h-auto"
                >
                  <IoCloseCircleOutline className="cursor-pointer " />
                  <p>{tag.trim()}</p>
                </div>
              ))}
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
          >
            confirm edit
          </button>
          <button
            className="btn btn-outline btn-info btn-wide text-white"
            onClick={quitEditingHandler}
          >
            Quit Editing
          </button>
        </form>
      ) : (
        <ProfileView />
      )}
    </div>
  );
};

export default Profile;
