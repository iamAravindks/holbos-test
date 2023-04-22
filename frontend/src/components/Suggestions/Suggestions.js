import React, { useContext, useEffect, useState } from "react";
import EdCard from "../ED/EdCard";
import Context from "../../context/Context";

const Suggestions = () => {
  const { ed, userInfo } = useContext(Context);

  const [eds, setEds] = useState([]);

  useEffect(() => {
    const suggestionEds = ed.filter(
      (item) => item.discipline === userInfo.discipline
    );
    setEds(suggestionEds);
  }, [userInfo]);
  if (userInfo?.discipline)
    return (
      <div className="flex flex-col gap-3 justify-center items-center my-6">
        <h1 className="text-xl">Suggestions based on your profile</h1>
        <div className="p-3 flex flex-col gap-6">
          {eds?.map((e) => (
            <EdCard key={e._id} item={e} />
          ))}
        </div>
      </div>
    );
};

export default Suggestions;
