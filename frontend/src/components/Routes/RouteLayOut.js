import { Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoutingLayout from "./PrivateRoutingLayout";
import Home from "../Home/Home";

const RouteLayOut = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<PrivateRoutingLayout />}>
          <Route path="/" element={<Home />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouteLayOut;
