import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { detailData } from "../../firebase/firebase";
import DancerForm from "../../components/Forms/DancerForm";
import { Button, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import "materialize-css";

const DetailDancer = () => {
  const dancerID = useSelector((state) => state.dancers.dancerID);

  const [dancer, setDancer] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    const getDancer = async () => {
      const { data } = await detailData(dancerID);
      setDancer(data);
    };
    getDancer();
  }, [dancerID]);

  return (
    <section className="main-box">
      <h4>Información Personal</h4>
      <div className="border-box">
        <DancerForm dancer={dancer} type="Editar" dancerID={dancerID} />
      </div>
      <Button
        className="red"
        fab={{
          direction: "left",
        }}
        icon={<Icon>arrow_back</Icon>}
        floating
        large
        node="button"
        onClick={() => navigate(-1)}
      ></Button>
    </section>
  );
};

export default DetailDancer;
