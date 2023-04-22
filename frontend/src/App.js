import React, { useContext, useEffect, useState } from "react";
import RouteLayOut from "./components/Routes/RouteLayOut";
import Context from "./context/Context";
import Loader from "./components/Loader/Loader";
import LoaderUI from "./components/Loader/LoaderUI";

import Error from "./components/Error/Error";

const App = () => {
  const { loadProfile, userInfo, setLoading, checkAuth, loadEd, loadSkills } =
    useContext(Context);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  // const authCheck = async () => {
  //   const auth = await checkAuth();
  //   console.log(auth);
  //   setIsAuth(auth);
  // };
  // //TODO:userStatus checking is required
  // useEffect(() => {
  //   authCheck();
  // }, []);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const res = await checkAuth();
        if (res) {
          await Promise.all([loadProfile(), loadEd(), loadSkills()]);
        }
      } finally {
        setLoading(false);
        setIsProfileLoaded(true);
      }
    };

    fetchData();
  }, [userInfo?._id]);

  if (!isProfileLoaded) return <LoaderUI />;

  return (
    <div className="App">
      <RouteLayOut />
      <Loader />
      <Error />
    </div>
  );
};

export default App;
