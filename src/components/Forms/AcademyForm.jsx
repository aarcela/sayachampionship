import React from "react";
import Input from "../Input";

import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Select } from "react-materialize";
import { vzla_state } from "../../app/vzla_states";
import { ToastContainer, toast } from "react-toastify";
import { createAcademy, editAcademy } from "../../actions/academy";
import "../../App.css";

const AcademyForm = ({ type, academy, academyID }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Requerido";
    } else if (values.name.length < 3) {
      errors.name = "Debe tener mínimo 3 caracteres";
    }

    if (!values.director) {
      errors.director = "Requerido";
    } else if (values.director.length < 3) {
      errors.director = "Debe tener mínimo 3 caracteres";
    }

    if (!values.state) {
      errors.state = "Requerido";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      director: academy.director,
      name: academy.name,
      state: academy.state,
    },
    validate,
    enableReinitialize: true,
    onSubmit: (values) => {
      switch (type) {
        case "Agregar":
          handleAdd(values);
          formik.resetForm();
          break;
        case "Editar":
          handleEdit(values, academyID);
          break;
        default:
          break;
      }
    },
  });

  const dispatch = useDispatch();
  const handleAdd = (values) => {
    dispatch(createAcademy(values));
    notify("Academia Creada");
  };
  const handleEdit = (values, dancerID) => {
    dispatch(editAcademy(values, dancerID, "academy"));
    notify("Academia Editada");
  };

  const notify = (message) => toast(message);

  return (
    <>
      <form onSubmit={formik.handleSubmit} className="main-box">
        <Input
          name="name"
          label="Nombre"
          value={formik.values.name}
          handleinputchange={formik.handleChange}
          className="input-field"
          error={formik.errors.name}
        />
        <Input
          name="director"
          label="Director"
          value={formik.values.director}
          handleinputchange={formik.handleChange}
          className="input-field"
          error={formik.errors.director}
        />

        <Select
          name="state"
          label="Estado"
          value={formik.values.state}
          onChange={formik.handleChange}
          className="input-field"
        >
          <option disabled value="">
            Seleccionar...
          </option>
          {vzla_state.map((estado, index) => (
            <option key={index} value={estado.estado}>
              {estado.estado}
            </option>
          ))}
        </Select>

        <button className="button_group" type="submit">
          {type}
        </button>
      </form>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default AcademyForm;
