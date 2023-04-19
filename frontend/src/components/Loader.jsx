import React, { useContext } from "react";
import Context from "../context/Context";

const Loader = () => {
  const { loading } = useContext(Context);
  if (loading)
    return (
      <div className="absolute z-[1000] flex min-h-screen justify-center items-center ">
        <h1 className="text-2xl text-primary">Loading...</h1>
      </div>
    );
};

export default Loader;
