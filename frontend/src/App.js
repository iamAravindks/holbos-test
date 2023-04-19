import React, { useContext, useEffect, useState } from "react";
import RouteLayOut from "./components/Routes/RouteLayOut";
import Context from "./context/Context";
import Loader from "./components/Loader";
import Error from "./components/Error/Error";

const App = () => {
  const { loadProfile, userInfo, userStatus, setLoading } = useContext(Context);
  const [isProfileLoaded, setIsProfileLoaded] = useState(false);

  //TODO:userStatus checking is required
  useEffect(() => {
    setLoading(true);
    if (!userInfo?._id) {
      loadProfile().then(() => setIsProfileLoaded(true));
    } else {
      setIsProfileLoaded(true);
      setLoading(false);
    }
  }, []);

  if (!isProfileLoaded) return <Loader />;

  return (
    <div className="App">
      <RouteLayOut />
      <Loader />
      <Error />
    </div>
  );
};

export default App;
