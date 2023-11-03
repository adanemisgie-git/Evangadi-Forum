
import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
import LandingPage from "../LandingPage/LandingPage";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import './Login.css'

const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const [passwordVisible, setPasswordVisible] = useState(false);

  // const [type, setType] = useState("password");
  // const [visibility, setVisibilitiy] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //Password visiblity
  const handlePasswordToggle = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //sending user data to database to be logged in
      const loginRes = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email: form.email,
          password: form.password,
        }
      );

      //update global state with response from backend(user-info)
      setUserData({
        token: loginRes.data.token,
        user: loginRes.data.user,
      });

      //set localStorage with the token
      localStorage.setItem("auth-token", loginRes.data.token);

      //navigate user to homepage
      navigate("/");
    } catch (err) {
      console.log("problem", err.response.data.msg);
      alert(err.response.data.msg);
    }
  };

  useEffect(() => {
    if (userData.user) navigate("/");
  }, [userData.user, navigate]);

  return (
    <>
      <LandingPage
        sign={
          <>
            <div className="login">
              <h3>Login to Your Account</h3>
              <div className="login__CreateAct">
                <span className="login__CreateActP">
                  Don't Have an Account?
                </span>
                <Link to="/signup" className="CrtAct">
                  Create a new account
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <br />
                <input
                  placeholder="Your Email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
                <br /> <br />
                {/* <input
                  placeholder="Your Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                /> */}
                <div className="password-input">
                  <input
                    placeholder="Your Password"
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                  />
                  {passwordVisible ? (
                    <FaEyeSlash
                      className="password-icon"
                      onClick={handlePasswordToggle}
                    />
                  ) : (
                    <FaEye
                      className="password-icon"
                      onClick={handlePasswordToggle}
                    />
                  )}
                </div>
                <br /> <br />
                <button>Submit</button>
              </form>
              
            </div>
          </>
        }
      />
    </>
  );
};
export default Login;