import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { detailData } from "../../firebase/firebase";
import DancerForm from "../../components/Forms/DancerForm";
import Fab from "../../components/Fab";
import "../../App.css";
import "materialize-css";
import "react-toastify/dist/ReactToastify.css";

const DetailDancer = () => {
  const dancerID = useSelector((state) => state.dancers.dancerID);

  const [dancer, setDancer] = useState([]);

  useEffect(() => {
    const getDancer = async () => {
      const { data } = await detailData(dancerID, "dancers");
      setDancer(data);
    };
    getDancer();
  }, [dancerID]);

  return (
    <section className="main-box">
      <h5>Información Personal</h5>
      <div className="border-box">
        <DancerForm dancer={dancer} type="Editar" dancerID={dancerID} />
      </div>
      <Fab iconName="arrow_back" />
    </section>
  );
};

export default DetailDancer;
