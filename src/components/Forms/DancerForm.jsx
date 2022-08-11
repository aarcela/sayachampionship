import React from "react";
import Input from "../Input";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { createDancer, editDancer } from "../../actions/dancer";
import { Select } from "react-materialize";
import { vzla_state } from "../../app/vzla_states";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { uploadFile } from "../../firebase/firebase";
import "../../App.css";

const DancerForm = ({ type, dancer, dancerID }) => {
  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "Requerido";
    } else if (values.name.length < 3) {
      errors.name = "Debe tener mínimo 3 caracteres";
    }

    if (!values.lastName) {
      errors.lastName = "Requerido";
    } else if (values.lastName.length < 3) {
      errors.lastName = "Debe tener mínimo 3 caracteres";
    }
    if (!values.academy) {
      errors.academy = "Requerido";
    }
    if (!values.antiquity) {
      errors.antiquity = "Requerido";
    }

    if (!values.ci) {
      errors.ci = "Requerido";
    } else if (values.ci.length < 10) {
      errors.ci = "Documentación inválida";
    } else if (!/^[0-9]*$/i.test(values.ci)) {
      errors.ci = "Documentación inválida";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      address: dancer.address,
      birthdate: dancer.birthdate,
      ci: dancer.ci,
      gender: dancer.gender,
      lastName: dancer.lastName,
      name: dancer.name,
      state: dancer.state,
      antiquity: dancer.antiquity,
      academy: dancer.academy,
      photoURL: dancer.photoURL,
      newPhoto: dancer.newPhoto,
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
          handleEdit(values, dancerID);
          break;
        default:
          break;
      }
    },
  });

  const academyList = useSelector((state) => state.academies.academiesData);
  const [file, setFile] = useState();

  const dispatch = useDispatch();

  const handleAdd = async (values) => {
    const imageURL = await uploadFile(file);
    formik.values.photoURL = imageURL;
    console.log(values);
    dispatch(createDancer(values));
    notify("Usuario Creado");
  };
  const handleEdit = async (values, dancerID) => {
    const imageURL = await uploadFile(file);
    formik.values.photoURL = imageURL;
    console.log(values);
    dispatch(editDancer(values, dancerID));
    notify("Usuario Editado");
  };

  const notify = (message) => toast(message);

  const handleFile = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <div className="main-box">
        <form onSubmit={formik.handleSubmit}>
          {dancer.photoURL && (
            <img
              src={dancer.photoURL}
              className="profile_image"
              alt="profile"
            />
          )}
          <Input
            name="photo"
            label="Foto"
            value={formik.values.newPhoto}
            type="file"
            handleinputchange={handleFile}
            className="input-field"
            error={formik.errors.newPhoto}
          />
          <Input
            name="name"
            label="Nombre"
            value={formik.values.name}
            handleinputchange={formik.handleChange}
            className="input-field"
            error={formik.errors.name}
          />
          <Input
            name="lastName"
            label="Apellido"
            value={formik.values.lastName}
            handleinputchange={formik.handleChange}
            className="input-field"
            error={formik.errors.lastName}
          />
          <Input
            name="ci"
            label="Cédula"
            // type="number"
            handleinputchange={formik.handleChange}
            className="input-field"
            value={formik.values.ci}
            error={formik.errors.ci}
          />
          <Select
            name="academy"
            label="Academia"
            value={formik.values.academy || []}
            onChange={formik.handleChange}
            className="input-field"
          >
            <option disabled value="">
              Seleccionar...
            </option>
            {academyList.map((academy) => {
              return (
                <option key={academy.id} value={academy.name}>
                  {academy.name}
                </option>
              );
            })}
          </Select>
          {formik.errors.academy ? (
            <span className="form-error">{formik.errors.academy}</span>
          ) : null}
          <Select
            name="gender"
            label="Sexo"
            value={formik.values.gender || []}
            onChange={formik.handleChange}
            className="input-field"
          >
            <option key="0" value="">
              Seleccionar...
            </option>
            <option key="1" value="Masculino">
              Masculino
            </option>
            <option key="2" value="Femenino">
              Femenino
            </option>
            <option key="3" value="No especifica">
              No especifica
            </option>
          </Select>
          <Input
            name="birthdate"
            label="Fecha de nacimiento"
            type="date"
            value={formik.values.birthdate}
            handleinputchange={formik.handleChange}
            className="input-field"
            error={formik.errors.birthdate}
          />
          <Select
            name="state"
            label="Estado"
            value={formik.values.state || []}
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

          <Input
            name="antiquity"
            label="Ingreso en competencias"
            type="date"
            value={formik.values.antiquity}
            handleinputchange={formik.handleChange}
            className="input-field"
          />
          <Input
            name="address"
            label="Dirección"
            value={formik.values.address}
            handleinputchange={formik.handleChange}
            className="input-field"
            error={formik.errors.address}
          />
          <button className="button_group" type="submit">
            {type}
          </button>
        </form>
      </div>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default DancerForm;
