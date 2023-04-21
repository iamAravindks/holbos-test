import React, { useContext } from "react";
import Context from "../../context/Context";
import ED from "../ED/ED";

const Home = () => {
  const {
    userInfo: { name },
  } = useContext(Context);

  return (
    <div className="p-2">
      <div className="w-full p-3 border-b-2 border-black">
        <h1 className="w-full text-2xl md:text-4xl  font-medium m-3">
          Welcome <span className="uppercase text-primary">{name}</span>
        </h1>
        <h1 className="m-3 w-full text-3xl  md:text-5xl lg:text-right lg:text-7xl">
          Explore Engineering Industries
        </h1>
      </div>
      <ED />
    </div>
  );
};

export default Home;
