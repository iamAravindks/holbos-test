import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Context from "../../context/Context";
import SkillBadge from "./SkillBadge";
import { setView } from "../../utils";

const SingleEd = () => {
  const { id, discipline } = useParams();
  const { ed, userInfo } = useContext(Context);
  const [percentage, setPercentage] = useState(0);
  const [missingSkills, setMissingSkills] = useState([]);
  const viewRef = useRef(null);

  const currentEd = ed
    ?.filter((item) => item.discipline === discipline)
    .reduce((acc, curr, index) => {
      acc = curr;
      return acc;
    })
    .details.filter((item) => item._id === id)
    .reduce((acc, curr) => (acc = curr));
  const {
    companyName,
    companyDescription,
    companyImage,
    products,
    peopleSoftSkills,
    workCulture,
    skillSets,
  } = currentEd;

  useEffect(() => {
    setMissingSkills(
      skillSets.filter(
        (skill) => !userInfo.skillSets.includes(skill.toLowerCase())
      )
    );
  }, [userInfo?._id]);

  useEffect(() => {
    const percentage = Math.round(
      (1 - missingSkills.length / skillSets.length) * 100
    );
    setPercentage(percentage);
  }, [missingSkills]);

  return (
    <div className="">
      <Link
        className="fixed btn m-3 bottom-2 right-0 rounded-full w-12 h-12 flex z-[100]"
        to={"/"}
      >
        <MdOutlineArrowBackIosNew />
      </Link>
      <div className="card w-100 h-[600px] shadow-xl image-full bg-gray-900 relative rounded-none">
        <figure>
          <img src={companyImage} alt={companyName} />
        </figure>
        <div className="card-body ">
          <div className="text-7xl bg-gradient-to-r from-sky-500 to-blue-800 bg-clip-text text-transparent font-extrabold w-full mt-auto py-6">
            {companyName}
          </div>
        </div>
      </div>
      <div className=" mt-5 flex-col p-3">
        <p className="py-4 font-medium break-words text-justify w-full">
          {companyDescription}
        </p>
        <button className="btn " onClick={() => setView(viewRef)}>
          Check if profiles match
        </button>
        <div className="w-full py-4">
          <h2 className="text-xl uppercase font-light text-black border-black border max-w-max text-center rounded-md p-2">
            Products & Services
          </h2>
        </div>
        <div className="flex gap-6 md:justify-start sm:justify-center items-center flex-wrap p-3 my-10">
          {products.map((product, ind) => (
            <div
              className="card lg:card-side bg-base-100 shadow-xl max-w-100  min-h-[250px]"
              key={ind}
            >
              <figure>
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="object-cover "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.productName}</h2>
                <p className="max-w-sm">{product.productDescription}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full py-4">
          <h2 className="text-xl uppercase font-light text-black border-black border max-w-max text-center rounded-md p-2">
            What we follow
          </h2>
        </div>
        <div className="flex flex-wrap">
          {workCulture.map((culture, ind) => (
            <div className="card shadow-md w-full rounded-none" key={ind}>
              <div className="card-body">
                <h2 className="text-lg w-full card-title">{culture.culture}</h2>
                <p>{culture.importance}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full py-4">
          <h2 className="text-xl uppercase font-light text-black border-black border max-w-max text-center rounded-md p-2">
            What we encourages
          </h2>
        </div>
        <div className="flex flex-wrap gap-6">
          {peopleSoftSkills.map((skill, ind) => (
            <div className="card shadow-md  rounded-none" key={ind}>
              <div className="card-body">
                <h2 className="text-lg w-full card-title">{skill}</h2>
              </div>
            </div>
          ))}
        </div>
        <div
          className=" w-full flex flex-col gap-6 justify-center items-center my-10"
          ref={viewRef}
        >
          <h1 className="text-3xl font-extrabold">You profile matches</h1>
          <div
            className="radial-progress text-primary"
            style={{ "--value": percentage }}
          >
            {percentage}%
          </div>
          <Link to={"/profile"} className="btn btn-outline">
            Update Profile
          </Link>
        </div>

        <SkillBadge
          title={"tech skills you needed"}
          data={skillSets}
          text={"text=success"}
          bg={"bg-success"}
        />

        <SkillBadge
          title={"your skills"}
          data={userInfo.skillSets}
          text={"text-warning"}
          bg={"bg-warning"}
        />
        {missingSkills.length > 0 && (
          <>
            <SkillBadge
              title={"Learn these skills and update yourself"}
              data={missingSkills}
              text={"text-error"}
              bg={"bg-error"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default SingleEd;
