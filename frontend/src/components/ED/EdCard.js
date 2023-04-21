import React from "react";
import { useNavigate } from "react-router-dom";
const EdCard = ({ item }) => {
  const navigate = useNavigate();
  const onClickHandler = (id) => navigate(`/ed/${item.discipline}/${id}`);
  return (
    <div className="">
      <h2 className="text-2xl font-bold my-5 w-full text-center">
        {item.discipline}
      </h2>
      <hr className="my-5" />
      <div className="flex gap-3 justify-around items-center flex-wrap">
        {item?.details?.map((company) => {
          return (
            <div key={company._id} className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <img
                  src={company.companyImage}
                  alt={company.companyName}
                  className="rounded-xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">
                  {company.companyName}
                </h2>
                <p className="m-1 p-1 text-left">
                  {company.companyDescription.slice(0, 90)}
                  <span
                    className="text-opacity-50 text-blue-800 cursor-pointer"
                    onClick={() => onClickHandler(company._id)}
                  >
                    {" "}
                    see more...
                  </span>
                </p>

                <div className="card-actions">
                  <button
                    className="btn btn-primary"
                    onClick={() => onClickHandler(company._id)}
                  >
                    View more
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EdCard;
