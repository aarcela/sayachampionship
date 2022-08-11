import React from "react";
import { TextInput } from "react-materialize";
// import "../App.css";

const Input = ({
  name,
  label,
  type,
  handleinputchange,
  value,
  error,
  className,
}) => {
  return (
    <>
      <TextInput
        autoComplete="off"
        className={className}
        label={label}
        name={name}
        onChange={handleinputchange}
        type={type}
        value={value}
        s={6}
      />
      {{ error } ? <span className="form-error">{error}</span> : null}
    </>
  );
};

export default Input;
