import { useState } from "react";
import {
  createAuhtUserWithGoogleEmailAndPassword,
  craeteUserDocumentFRomAuth,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.style.scss";
import Button from "../button/button.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formField;
  console.log(formField);

  const hanldeSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Your passwords do not match");
      return;
    }
    try {
      const { user } = await createAuhtUserWithGoogleEmailAndPassword(
        email,
        password
      );
      console.log(user);
      await craeteUserDocumentFRomAuth(user, { displayName });
      setFormField(defaultFormFields);
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user,user already exist");
        setFormField(defaultFormFields);
      } else {
        console.log(`user creation encountered an error${error}`);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={hanldeSubmit}>
        <FormInput
          label="Display name"
          type="text"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />

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

        <FormInput
          label="Confirm password"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <Button buttonType="google" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
