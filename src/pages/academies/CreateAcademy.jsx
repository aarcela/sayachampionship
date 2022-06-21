import React from "react";
import { Button, Icon } from "react-materialize";
import { useNavigate } from "react-router-dom";
import AcademyForm from "../../components/Forms/AcademyForm";

const CreateAcademy = () => {
  const navigate = useNavigate();
  return (
    <>
      <h4>Create Academy</h4>
      <section className="border-box">
        <AcademyForm academy={""} type="Agregar" />
      </section>
      <Button
        className="blue_background"
        fab={{
          direction: "left",
        }}
        icon={<Icon>arrow_back</Icon>}
        floating
        small
        node="button"
        onClick={() => navigate(-1)}
      ></Button>
    </>
  );
};

export default CreateAcademy;
