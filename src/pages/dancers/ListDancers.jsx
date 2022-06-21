import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteDancer, detailDancer } from "../../actions/dancer";
import { Button, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import GeneralTable from "../../components/GeneralTable";
import "../../App.css";
import "materialize-css";
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
        data={dataDancer}
        header1="Nombre"
        header2="Apellido"
        header3="CI"
        detail={getDetailDancer}
        remove={removeDancer}
      />
      <Button
        className="blue_background"
        fab={{
          direction: "left",
        }}
        icon={<Icon>person_add</Icon>}
        floating
        small
        node="button"
        onClick={() => navigate("/create-dancer")}
      ></Button>
    </>
  );
};

export default ListDancers;
