// import { getRedirectResult } from "firebase/auth";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import "./auth.component.scss";
// import {
//   createUserDocumentFromAuth,
//   signInWithGooglePopup,
// } from "../../utils/firebase/firebase.util";

const AuthenticationComponent = () => {
  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   const userDocRef = await createUserDocumentFromAuth(user);
  // };

  // sign in with redirect
  //   useEffect(async () => {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }, []);

  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with gg redirect
      </button> */}
    </div>
  );
};

export default AuthenticationComponent;
