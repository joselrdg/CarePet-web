import React, { useState } from "react";
import { Link } from "react-router-dom";

//eslint-disable-next-line
const EMAIL_PATTERN = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const PASSWORD_PATTERN = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const validators = {
  email: (value) => {
    let message;
    if (!value) {
      message = "Email is required";
    } else if (!EMAIL_PATTERN.test(value)) {
      message = "Email is invalid";
    }
    return message;
  },
  password: (value) => {
    let message;
    if (!value) {
      message = "Password is required";
    } else if (!PASSWORD_PATTERN.test(value)) {
      message =
        "Your password must contain at least 8 characters, 1 number, 1 uppercase and 1 lowercase";
    }
    return message;
  },
};

export const LoginScreen = () => {
  const [state, setstate] = useState({
    fields: {
      email: "",
      password: "",
    },
    errors: {
      email: validators.email(),
      password: validators.password(),
    },
  });

  const [touched, setTouched] = useState({});

  const isValid = () => {
    const { errors } = state;
    return !Object.keys(errors).some((error) => errors[error]);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (isValid) {
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setstate((prevState) => ({
      fields: {
        ...prevState.fields,
        [name]: value,
      },
      errors: {
        ...prevState.errors,
        [name]: validators[name] && validators[name](value),
      },
    }));
  };

  const onBlur = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const onFocus = (e) => {
    const { name } = e.target;

    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: false,
    }));
  };

  const { email, password } = state.fields;
  const { errors } = state;

  return (
    <>
      <h3 className="auth__title">Login</h3>
      <form onSubmit={onSubmit}>
        <input
          className={`auth__input ${
            errors.email && touched.email ? "auth__invalid" : ""
          }`}
          type="text"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {errors.email && <i className="auth__invalid">{errors.email}</i>}
        <input
          className={`auth__input ${
            errors.password && touched.password ? "auth__invalid" : ""
          }`}
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
        />
        {errors.password && <i className="auth__invalid">{errors.password}</i>}
        <button
          className={`btn ${
            isValid ? "btn-primary-d" : "btn-primary"
          } btn-block`}
          type="submit"
          disabled={!isValid}
        >
          Login
        </button>
        <hr />
        <div className="auth__social-networks">
          <p>Login with social networks</p>
          <div className="google-btn">
            <div className="google-icon-wrapper">
              <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="google button"
              />
            </div>
            <p className="btn-text">
              <b>Sign in with google</b>
            </p>
          </div>
        </div>
        <Link className="link" to="/auth/register">
          Create new account
        </Link>
      </form>
    </>
  );
};
