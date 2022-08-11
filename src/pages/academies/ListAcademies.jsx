import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAcademy, detailAcademy } from "../../actions/academy";
import Fab from "../../components/Fab";
import GeneralTable from "../../components/GeneralTable";

const ListAcademies = () => {
  const academiesData = useSelector((state) => state.academies.academiesData);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getDetailAcademy = (id) => {
    dispatch(detailAcademy(id));
    navigate("/detail-academy");
  };

  const removeAcademy = (id) => {
    dispatch(deleteAcademy(id));
  };

  return (
    <>
      <GeneralTable
        title="Lista de Academias"
        data={academiesData}
        detail={getDetailAcademy}
        remove={removeAcademy}
        header1="Nombre"
        header2="Director"
        header3="Estado"
      />
      {/* <Fab iconName="library_add" navigation="/create-academy" /> */}
    </>
  );
};

export default ListAcademies;
