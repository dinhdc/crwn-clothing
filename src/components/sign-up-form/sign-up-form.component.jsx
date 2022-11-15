import React, { useState } from "react";
import "./sign-up-form.component.scss";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.util";
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

const defaultFormFields = {
  diplayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("password does not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });  
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInputComponent
          label={"Display Name"}
          type="text"
          onChange={handleChange}
          required
          name="displayName"
          value={displayName}
        />

        <FormInputComponent
          label={"Email"}
          type="email"
          onChange={handleChange}
          required
          name="email"
          value={email}
        />

        <FormInputComponent
          label={"Password"}
          type="password"
          onChange={handleChange}
          required
          name="password"
          value={password}
        />

        <FormInputComponent
          label={"Confirm Password"}
          type="password"
          onChange={handleChange}
          required
          name="confirmPassword"
          value={confirmPassword}
        />

        <ButtonComponent type="submit" buttonType="inverted">
          Sign Up
        </ButtonComponent>
      </form>
    </div>
  );
};

export default SignUpForm;
