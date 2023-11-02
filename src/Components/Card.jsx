import React, { useEffect, useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import "../styles/styles.scss";
const Card = ({ data }) => {
  const [files, setFiles] = useState({
    img: "",
    cv: "",
  });
  const storage = getStorage();

  const getfiles = async () => {
    setFiles({
      img: await getDownloadURL(
        ref(storage, `pictures/${data.id}.${data.img_type}`)
      ),
      cv: await getDownloadURL(ref(storage, `cv/${data.id}.pdf`)),
    });
  };

  useEffect(() => {
    getfiles();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col  m-3 w-[350px]   items-center border-[0.5px] justify-between shadow-lg rounded-xl bg-white">
      <div className="w-full">
        <img
          src={files.img}
          loading="lazy"
          alt={data.name}
          class=" w-full rounded-t-xl h-[230px] border-none align-top object-contain rounded-2xl border-b-slate-500"
        />
        <div className="p-2 justify-center">
          <div className="flex flex-col ">
            <label className="text-xl items-center text-center left-1/4 right-1/2 font-bold ">
              {data.name}
            </label>
            <label className="text-md items-center text-center italic  left-1/4 right-1/2 ">
              {data.occupation}
            </label>
          </div>
          <div className="flex flex-col  rounded-lg p-4  ">
            <label className="text-2xl font-semibold my-2">About me</label>
            <hr className=" h-1 bg-green-500 w-2/4" />
            <p className=" my-3 text-sm  rounded-md p-2 shadow-sm">{data.desc}</p>
          </div>
        </div>
      </div>
      <div class="button-container-1 shadow-md  relative bottom-10 ">
        <span class="mas flex flex-row items-center justify-around">
          View CV
        </span>
        <a
          id="work"
          type="button"
          name="Hover"
          download={`${data.id}.pdf`}
          href={files.cv}
          className="flex flex-row items-center justify-around"
        >
          View CV
        </a>
      </div>
    </div>
  );
};
export default Card;
