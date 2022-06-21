import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Icon } from "react-materialize";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AcademyForm from "../../components/Forms/AcademyForm";
import { detailData } from "../../firebase/firebase";

const DetailAcademy = () => {
  const academyID = useSelector((state) => state.academies.academyID);

  const [academy, setAcademy] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getDancer = async () => {
      const { data } = await detailData(academyID, "academy");
      setAcademy(data);
    };
    getDancer();
  }, [academyID]);

  return (
    <section className="main-box">
      <h4>Información Personal</h4>
      <div className="border-box">
        <AcademyForm academy={academy} type="Editar" academyID={academyID} />
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

export default DetailAcademy;
