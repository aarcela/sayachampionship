import React from "react";
import { Button, Icon } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAcademy, detailAcademy } from "../../actions/academy";
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
      <Button
        className="blue_background"
        fab={{
          direction: "left",
        }}
        icon={<Icon>library_add</Icon>}
        floating
        small
        node="button"
        onClick={() => navigate("/create-academy")}
      ></Button>
    </>
  );
};

export default ListAcademies;
