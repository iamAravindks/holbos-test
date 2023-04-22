import React from "react";

const SkillBadge = ({ title, data, text, bg }) => {
  return (
    <>
      <div className="w-full py-4">
        <h2
          className={`text-xl uppercase font-light ${text}  border max-w-max text-center rounded-md p-2`}
        >
          {title}
        </h2>
      </div>
      <div className="flex flex-wrap gap-6">
        {data?.map((skill, ind) => (
          <div className={`card shadow-md ${bg} rounded-none`} key={ind}>
            <div className="card-body">
              <h2 className="text-lg w-full  text-white card-title">{skill}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SkillBadge;
