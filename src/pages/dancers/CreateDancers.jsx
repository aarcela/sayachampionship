import React from "react";
import DancerForm from "../../components/Forms/DancerForm";
import Fab from "../../components/Fab";
import "../../App.css";

const CreateDancers = () => {
  const initialValues = {
    name: "",
    lastName: "",
    ci: "0",
    gender: [],
    birthdate: "",
    address: "",
    state: [],
  };

  return (
    <>
      <h5>Agregar Bailarín</h5>
      <section className="border-box">
        <DancerForm dancer={initialValues} type="Agregar" />
      </section>
      <Fab iconName="arrow_back" />
    </>
  );
};

export default CreateDancers;
