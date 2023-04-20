import { Outlet, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import PrivateRoutingLayout from "./PrivateRoutingLayout";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";

const RouteLayOut = () => {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  };
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Layout />}>
          <Route element={<PrivateRoutingLayout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default RouteLayOut;
