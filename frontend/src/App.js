import React, { useContext, useEffect, useState } from "react";
import RouteLayOut from "./components/Routes/RouteLayOut";
import Context from "./context/Context";
import Loader from "./components/Loader/Loader";
import LoaderUI from "./components/Loader/LoaderUI";

import Error from "./components/Error/Error";

const App = () => {
  const { loadProfile, userInfo, setLoading, checkAuth } = useContext(Context);
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
    checkAuth()
      .then((res) => {
        if (res) {
          loadProfile().finally(() => setIsProfileLoaded(true));
        }
      })
      .finally(() => setLoading(false));
  }, []);

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
