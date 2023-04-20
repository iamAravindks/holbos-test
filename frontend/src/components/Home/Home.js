import React, { useContext } from "react";
import Context from "../../context/Context";

const Home = () => {
  const {
    userInfo: { name },
  } = useContext(Context);

  return (
    <div className="p-2">
      <h1 className="w-full text-4xl font-medium p-3">Welcome {name}</h1>
    </div>
  );
};

export default Home;
