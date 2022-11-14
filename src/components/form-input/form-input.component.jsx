import React from "react";
import "./form-input.component.scss";

const FormInputComponent = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      {label && (
        <label
          className={`${
            otherProps.value && otherProps.value.length ? "shrink" : ""
          } form-input-label`}
          htmlFor={otherProps.name}
        >
          {label}
        </label>
      )}
      <input {...otherProps} className="form-input" />
    </div>
  );
};

export default FormInputComponent;
