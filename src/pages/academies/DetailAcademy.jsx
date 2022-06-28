import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Fab from "../../components/Fab";
import AcademyForm from "../../components/Forms/AcademyForm";
import { detailData } from "../../firebase/firebase";

const DetailAcademy = () => {
  const academyID = useSelector((state) => state.academies.academyID);

  const [academy, setAcademy] = useState([]);

  useEffect(() => {
    const getDancer = async () => {
      const { data } = await detailData(academyID, "academy");
      setAcademy(data);
    };
    getDancer();
  }, [academyID]);

  return (
    <>
      <h4>Información Personal</h4>
      <div className="border-box">
        <AcademyForm academy={academy} type="Editar" academyID={academyID} />
      </div>
      <Fab iconName="arrow_back" />
    </>
  );
};

export default DetailAcademy;
