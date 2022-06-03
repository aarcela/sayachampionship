import React from "react";
import "../App.css";

const Input = ({ name, label, type = "text", handleInputChange }) => {
  return (
    <div className="input_group">
      <input
        required=""
        type={type}
        name={name}
        autoComplete="off"
        className="input"
        onChange={handleInputChange}
      />
      <label className="user_label">{label}</label>
    </div>
  );
};

export default Input;
