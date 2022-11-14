import React, { useState } from "react";
import "./sign-in.component.scss";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.util";
import FormInputComponent from "../form-input/form-input.component";
import ButtonComponent from "../button/button.component";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
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
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
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

        <div className="buttons-container">
          <ButtonComponent type="submit" buttonType="inverted">
            Sign In
          </ButtonComponent>
          <ButtonComponent
            type="button"
            onClick={signInWithGoogle}
            buttonType="google"
          >
            Google Sign In
          </ButtonComponent>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
