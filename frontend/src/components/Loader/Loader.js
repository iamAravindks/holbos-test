import React, { useContext } from "react";
import Context from "../../context/Context";
import LoaderUI from "./LoaderUI";
const Loader = () => {
  const { loading } = useContext(Context);
  if (loading) return <LoaderUI />;
};

export default Loader;
