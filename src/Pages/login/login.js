import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./login.css";
import { getAllAdmins } from "./../../myFirebase/adminFirebase";
export default function Login() {
  let history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [show, setShow] = useState(false);
  const [firebaseAdmins, setFirebaseAdmins] = useState([]);

  const [errors, setErrors] = useState({
    emailErrors: null,
    passwordErrors: null,
  });

  useEffect(() => {
    getAllAdmins().then((p) => {
      console.log(p);
      setFirebaseAdmins([...p]);
      console.log(firebaseAdmins);
    });
  }, []);

  const handleInputChange = (evt) => {
    if (evt.target.name == "email") {
      console.log("Email");
      setUser({
        ...user,
        email: evt.target.value,
      });
      let regex = new RegExp("[a-z0-9]+@[a-z]+[.]+[a-z]{2,3}");
      setErrors({
        ...errors,
        emailErrors:
          evt.target.value.length == 0
            ? "This field is required"
            : regex.test(evt.target.value)
            ? ""
            : "You should enter a Valid Email",
      });
    } else if (evt.target.name == "password") {
      console.log("password");
      setUser({
        ...user,
        password: evt.target.value,
      });

      setErrors({
        ...errors,
        passwordErrors:
          evt.target.value.length == 0
            ? "This field is required"
            : evt.target.value.length < 8
            ? "The Password must be at least 8 character"
            : "",
      });
    }
  };

  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType == "password") {
      setPasswordType("text");
      setShow(true);
    } else {
      setPasswordType("password");
      setShow(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const login = () => {
    firebaseAdmins.map((fireAdmin) => {
      if (fireAdmin.email != user.email) {
        alert("Wrong email");
      } else {
        if (fireAdmin.password == user.password) {
          alert("found");

          goToHome();
          console.log();
        } else {
          alert("Wrong password");
        }
      }
    });
  };
  const goToHome = () => {
    history.push("/Home");
  };
  return (
    <div className="loginPage">
      <div className="loginNav d-flex justify-content-center align-items-center">
        <img
          src="https://z.nooncdn.com/s/app/com/noon/design-system/logos/noon-logo-en.svg"
          alt="Noon"
        />
      </div>
      <div className="loginSection d-flex justify-content-center align-items-center ">
        <div className="container d-flex justify-content-center align-items-center">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="myform d-flex flex-column "
          >
            <div className="mb-2">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter Email"
                type="text"
                className={`form-control shadow-none ${
                  errors.emailErrors ? "border-danger" : ""
                }`}
                value={user.email}
                name="email"
                onChange={(e) => handleInputChange(e)}
              />
              <small className=" error-text">{errors.emailErrors}</small>
            </div>

            <div className="mb-2">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div style={{ position: "relative" }}>
                <input
                  placeholder="Enter Password"
                  type={passwordType}
                  className={`form-control shadow-none ${
                    errors.passwordErrors ? "border-danger" : ""
                  }`}
                  value={user.password}
                  name="password"
                  id="password"
                  onChange={(e) => handleInputChange(e)}
                />
                <small className="error-text">{errors.passwordErrors}</small>
                <i
                  className={show ? "bi bi-eye-slash-fill" : "bi bi-eye-fill"}
                  style={{ position: "absolute", right: "10px", top: "7px" }}
                  onClick={togglePassword}
                ></i>
              </div>
            </div>

            <button type="button" onClick={login} className="btn">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
