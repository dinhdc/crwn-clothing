import React from "react";
import { BaseButton, GoogleSignInButon, InvertedButton } from "./button.styled";

export const BUTTON_TYPE_CLASS = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

export const getButton = (buttonType = BUTTON_TYPE_CLASS.base) =>
  ({
    [BUTTON_TYPE_CLASS.base]: BaseButton,
    [BUTTON_TYPE_CLASS.google]: GoogleSignInButon,
    [BUTTON_TYPE_CLASS.inverted]: InvertedButton,
  }[buttonType]);

const ButtonComponent = ({ children, buttonType, ...ortherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...ortherProps}>{children}</CustomButton>;
};

export default ButtonComponent;
