import { useState } from "react";
import { signInUser, signInWithGooglePopup } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-in.component";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import "./sign-in.style.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);
  const { email, password } = formField;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const hanldeSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInUser(email, password);
      setFormField(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("No user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>I already have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={hanldeSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />

        <FormInput
          label="Password"
          type="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <div className="btn-container">
          <Button type="submit">SIGN IN </Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
