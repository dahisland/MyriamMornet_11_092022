import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LodgingHeader from "../components/LodgingHeader";
import LodgingAside from "../components/LodgingAside";
import LodgingArticle from "../components/LodgingArticle";
import Error404 from "./Error404";

const Lodging = () => {
  const { lodgingID } = useParams();
  const [data, setData] = useState({
    equipments: [],
    host: { name: "", picture: "" },
    pictures: [],
    tags: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("./data/logements.json");
      const json = await data.json();
      const lodgingData = json.find((item) => item.id === lodgingID);
      lodgingData ? setData(lodgingData) : setData(null);
    };
    fetchData();
    // return () => {};
  }, [lodgingID]);

  return data !== null ? (
    <div>
      <Header />
      <main className="lodgingPage_main">
        <section className="lodgingPageMain_lodgingInfos">
          <LodgingHeader data={data} />
          <LodgingAside data={data} />
          <LodgingArticle data={data} />
        </section>
      </main>
      <Footer />
    </div>
  ) : (
    <Error404 />
  );
};

export default Lodging;
