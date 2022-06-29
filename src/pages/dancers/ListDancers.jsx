import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDancer, detailDancer } from "../../actions/dancer";
import { useNavigate } from "react-router-dom";
import GeneralTable from "../../components/GeneralTable";
import "../../App.css";
import "materialize-css";
import Fab from "../../components/Fab";

const ListDancers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const dataDancer = useSelector((state) => state.dancers.dancersData);

  const getDetailDancer = (id) => {
    dispatch(detailDancer(id));
    navigate("/detail-dancer");
  };

  const removeDancer = (id) => {
    dispatch(deleteDancer(id));
  };

  return (
    <>
      <GeneralTable
        title="Lista de Bailarines"
        data={dataDancer}
        header1="Nombre"
        header2="Apellido"
        header3="Academia"
        detail={getDetailDancer}
        remove={removeDancer}
      />
      <Fab iconName="person_add" navigation="/create-dancer" />
    </>
  );
};

export default ListDancers;
