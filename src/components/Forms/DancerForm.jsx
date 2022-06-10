import React from "react";
import Input from "../Input";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { createDancer, editDancer } from "../../actions/dancer";
import { Select } from "react-materialize";
import { vzla_state } from "../../app/vzla_states";
import "../../App.css";

const DancerForm = ({ type, dancer, dancerID }) => {
  const formik = useFormik({
    initialValues: {
      address: dancer.address,
      birthdate: dancer.birthdate,
      ci: dancer.ci,
      gender: dancer.gender,
      lastName: dancer.lastName,
      name: dancer.name,
      state: dancer.state,
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      switch (type) {
        case "Agregar":
          handleAdd(values);
          break;
        case "Editar":
          handleEdit(values, dancerID);
          break;
        default:
          break;
      }
    },
  });

  const dispatch = useDispatch();
  const handleAdd = (values) => {
    dispatch(createDancer(values));
  };
  const handleEdit = (values, dancerID) => {
    dispatch(editDancer(values, dancerID));
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="main-box">
        <Input
          name="name"
          label="Nombre"
          value={formik.values.name}
          handleInputChange={formik.handleChange}
          className="input-field"
        />
        <Input
          name="lastName"
          label="Apellido"
          value={formik.values.lastName}
          handleInputChange={formik.handleChange}
          className="input-field"
        />
        <Input
          name="ci"
          label="Cédula"
          type="number"
          handleInputChange={formik.handleChange}
          className="input-field"
          value={formik.values.ci}
        />
        <Select
          name="gender"
          label="Sexo"
          value={formik.values.state}
          handleInputChange={formik.handleChange}
          className="input-field"
        >
          <option key="1" value="M">
            Masculino
          </option>
          <option key="2" value="F">
            Femenino
          </option>
          <option key="3" value="N">
            No especifica
          </option>
        </Select>
        <Input
          name="birthdate"
          label="Fecha de nacimiento"
          type="date"
          value={formik.values.birthdate}
          handleInputChange={formik.handleChange}
          className="input-field"
        />
        <Select
          name="state"
          label="Estado"
          value={formik.values.state}
          handleInputChange={formik.handleChange}
          className="input-field"
        >
          {vzla_state.map((estado, index) => (
            <option key={index} value={estado.estado}>
              {estado.estado}
            </option>
          ))}
        </Select>

        <Input
          name="address"
          label="Dirección"
          value={formik.values.address}
          handleInputChange={formik.handleChange}
          className="input-field"
        />
        <button className="button_group" type="submit">
          {type}
        </button>
      </form>
    </>
  );
};

export default DancerForm;
