import React, { useEffect, useState } from "react";
import { db } from "../../helpers/api.js";
import { collection, query, onSnapshot } from "firebase/firestore";
import Card from "../../Components/Card";
import "../../styles/styles.scss";
import Nav from "../../Components/Nav.jsx";
import Loader from "../../Components/Loader.jsx";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProfileInfo();
  }, []);

  const getProfileInfo = async () => {
    setLoading(true);
    const firestoreQuery = query(collection(db, "mscit"));
    await onSnapshot(firestoreQuery, (res) => {
      setData(
        res.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    });
   setTimeout(()=>{
    setLoading(false);
   },1000)
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          <div className="flex flex-wrap flex-row min-h-screen p-4 justify-around">
            {data.length > 0 ? (
              data.map((value, key) => <Card data={value} key={key} />)
            ) : (
              <></>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default Home;
