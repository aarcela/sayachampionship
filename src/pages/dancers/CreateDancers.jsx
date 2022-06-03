import React, { useState } from "react";
import Input from "../../components/Input";

import { addData } from "../../firebase/firebase";
import { useDispatch } from "react-redux";
import { createDancer } from "../../actions/dancer";
import { useFormik } from "formik";

import "../../App.css";

const CreateDancers = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      ci: 0,
      gender: "",
      birthdate: 0,
      address: "",
    },
    onSubmit: (values) => {
      handleAdd(values);
      //   alert(JSON.stringify(values, null, 2));
    },
  });
  const dispatch = useDispatch();
  const handleAdd = (values) => {
    dispatch(createDancer(values));
  };

  return (
    <section className="border-box">
      <h1>Create Dancer</h1>
      <form onSubmit={formik.handleSubmit} className="main-box">
        <Input
          name="name"
          label="Nombre"
          value={formik.values.name}
          handleInputChange={formik.handleChange}
        />
        <Input
          name="lastName"
          label="Apellido"
          value={formik.values.lastName}
          handleInputChange={formik.handleChange}
        />
        <Input
          name="ci"
          label="Cédula"
          type="number"
          handleInputChange={formik.handleChange}
          value={formik.values.ci}
        />
        <Input
          name="gender"
          label="Sexo"
          type="text"
          value={formik.values.gender}
          handleInputChange={formik.handleChange}
        />
        <Input
          name="birthdate"
          label="Fecha de nacimiento"
          type="date"
          value={formik.values.birthdate}
          handleInputChange={formik.handleChange}
        />
        <Input
          name="address"
          label="Dirección"
          value={formik.values.address}
          handleInputChange={formik.handleChange}
        />
        <button className="button_group" type="submit">
          Crear
        </button>
      </form>
      <div className="main-box">
        {/*         
        <Input
          name="Sexo"
          type="number"
          handleInputChange={handleInputChange}
        />
        <Input
          name="Fecha de nacimiento"
          type="date"
          handleInputChange={handleInputChange}
        />
        <Input name="Dirección" handleInputChange={handleInputChange} /> */}
      </div>
      {/* <button className="button_group" onClick={handleAdd}>
        Crear
      </button> */}
    </section>
  );
};

export default CreateDancers;
