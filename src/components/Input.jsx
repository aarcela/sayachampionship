import React from "react";
import { TextInput } from "react-materialize";
import "../App.css";

const Input = ({ name, label, type = "text", handleInputChange, value }) => {
  return (
    <div className="input_group">
      <TextInput
        autoComplete="off"
        className="input"
        label={label}
        name={name}
        onChange={handleInputChange}
        required=""
        type={type}
        value={value}
      />
      {/* <label className="user_label">{label}</label> */}
    </div>
  );
};

export default Input;
