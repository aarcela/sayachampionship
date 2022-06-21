import React from "react";
import { TextInput } from "react-materialize";
import "../App.css";

const Input = ({ name, label, type, handleinputchange, value, error }) => {
  return (
    <div className="input_group">
      <TextInput
        autoComplete="off"
        className="input"
        label={label}
        name={name}
        onChange={handleinputchange}
        required=""
        type={type}
        value={value}
      />
      {/* <label className="user_label">{label}</label> */}
      {{ error } ? <span className="form-error">{error}</span> : null}
    </div>
  );
};

export default Input;
