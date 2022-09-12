import { signInWithGooglePopup } from "../../../utils/firebase.utils";
import { craeteUserDocumentFRomAuth } from "../../../utils/firebase.utils";
const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    craeteUserDocumentFRomAuth(user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </div>
  );
};

export default SignIn;
