import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";

const RouteLayOut = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default RouteLayOut;
