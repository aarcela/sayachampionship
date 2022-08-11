import React from "react";
import Input from "../../components/Input";
import { Select } from "react-materialize";
import "../../App.css";

export const EventForm = ({ formik, events }) => {
  return (
    <form onSubmit={formik.handleSubmit}>
      <Select
        name="pk_academy"
        label="Competencia"
        value={formik.values.academy_name || []}
        onChange={formik.handleChange}
        className="input-field"
      >
        <option disabled value="">
          Seleccionar...
        </option>
        {events.map((event, index) => (
          <option key={index} value={event.name}>
            {event.name} - {event.date}
          </option>
        ))}
      </Select>
      <Input
        name="prize"
        label="Premio"
        value={formik.values.prize}
        className="input-field"
        handleinputchange={formik.handleChange}
      />
      <button className="button_group" type="submit">
        Agregar
      </button>
    </form>
  );
};
