import React from "react";
import { Group, FormInputLabel, Input } from "./form-input.styled";

const FormInputComponent = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel
          shrink={otherProps.value && otherProps.value.length}
          htmlFor={otherProps.name}
        >
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInputComponent;
