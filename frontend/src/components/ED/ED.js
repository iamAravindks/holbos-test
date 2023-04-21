import React, { useContext, useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Context from "../../context/Context";
import EdCard from "./EdCard";

const ED = () => {
  const { ed } = useContext(Context);
  const [tags, setTags] = useState([]);
  const [eds, setEds] = useState(ed);

  useEffect(() => {
    if (ed) {
      setTags([...ed.map((d) => d.discipline.trim())]);
    }
  }, [ed]);

  useEffect(() => {
    const data = ed.filter(
      (e) => tags.findIndex((tag) => tag === e.discipline) !== -1
    );

    console.log(data);
    // setEds();
  }, [ed, tags]);

  return (
    <div className="p-3">
      <div className="flex my-5 items-center">
        <h2 className="text-secondary">Choose Tags</h2>
        {tags.map((tag, ind) => (
          <div
            key={ind}
            className="badge badge-secondary badge-outline mx-3 flex justify-around items-center"
          >
            <IoCloseCircleOutline className="cursor-pointer " />
            <p>{tag.trim()}</p>
          </div>
        ))}
      </div>
      <div className="p-3 flex flex-col gap-6">
        {eds?.map((e) => (
          <EdCard key={e._id} item={e} />
        ))}
      </div>
    </div>
  );
};

export default ED;
