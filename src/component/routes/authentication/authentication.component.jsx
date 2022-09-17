// import { signInWithGooglePopup } from "../../../utils/firebase.utils";
// import { signInWithGoogleRedirect } from "../../../utils/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

import // craeteUserDocumentFRomAuth,
// auth,
"../../../utils/firebase.utils";
import "./authentication.style.scss";
import SignInForm from "../../sing-in/sign-in.component";
// import SignIn from "../../sign-in/sign-in.component";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const Authentication = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       craeteUserDocumentFRomAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // const logGoogleUser = async () => {
  //   const { user } = await signInWithGooglePopup();
  //   await craeteUserDocumentFRomAuth(user);
  // };

  return (
    <div className="whole">
      {/*  <button onClick={logGoogleUser}>Sign in with google popup</button>*/}
      {/* <button onClick={signInWithGoogleRedirect}>
      Sign in with google redirect
    </button>*/}
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
