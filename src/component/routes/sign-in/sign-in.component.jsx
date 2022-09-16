import { signInWithGooglePopup } from "../../../utils/firebase.utils";
// import { signInWithGoogleRedirect } from "../../../utils/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

import {
  craeteUserDocumentFRomAuth,
  // auth,
} from "../../../utils/firebase.utils";
// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";

const SignIn = () => {
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       craeteUserDocumentFRomAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await craeteUserDocumentFRomAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
      {/* <button onClick={signInWithGoogleRedirect}>
      Sign in with google redirect
    </button>*/}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
