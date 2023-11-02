// import axios from 'axios';
// import React, { useContext, useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { UserContext } from '../../UserContext';
// import logo from '../../../images/evangadi-logo-home.png'

// const Login = () => {
//     const [userData, setUserData] = useContext(UserContext);
//     const navigate = useNavigate();
//     const [form , setForm] = useState({});

//     const handleChange = (e)=>{
//         setForm({...form, [e.target.name]:e.target.value});
//     }

//     const handleSubmit = async (e)=>{
//         e.preventDefault();
//         try {
            
//             //sending user data to database to be logged in
//             const loginRes = await axios.post('http://localhost:4000/api/users/login', 
//             {
//                 email: form.email,
//                 password: form.password
//             });
//             //update global state with response from backend(user-ifo)
//             setUserData({
//                 token: loginRes.data.token,
//                 user: loginRes.data.user
//             });
//             //set localStorage with the token
//             localStorage.setItem('auth-token', loginRes.data.token);

//             //navigate user to homepage
//             navigate('/');
//         } catch (err) {
//             console.log('problem', err.response.data.msg);
//             alert(err.response.data.msg);
//         }
//     }


//     useEffect(()=>{
//         if(!userData.user) navigate("/login");

//     }, [userData.user, navigate]);
//   return (
//     <div className="bg-black">
//       <div className="bg-gray-100 h-full mb-18">
//         <div className="bg-white h-16 pt-4 flex justify-evenly">
//           <div className="">
//             <img
//               className="h-4 justify-center"
//               src={logo}
//               alt="evangadi logo"
//             />
//           </div>
//           <div className="flex space-x-5 justify-end ">
//             <p>Home</p>
//             <p>how it works</p>
//             {/* <p className="text-white bg-blue-600 h-6 w-40 text-center">
//               sign in
//             </p> */}
//             <p className="text-white bg-blue-600 h-6 w-40 text-sm text-center p-1 hover:bg-orange-600">
//               <Link to="/">SIGN IN</Link>{" "}
//             </p>
//           </div>
//         </div>

//         <div className="flex justify-evenly ml-2 mr-2 mb-1 shadow-gray-900">
//           <div className="w-full p-8 bg-white ml-40 mt-8 rounded-xl mb-6">
//             <h1 className="text-xl text-center font-semibold">
//               Login to your acount
//             </h1>
//             <h2 className="text-center text-sm">
//               {" "}
//               Don't have an account?{" "}
//               <Link className="text-orange-600 underline" to="/signup">
//                 Create a new account
//               </Link>{" "}
//             </h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mt-4">
//                 {/* <label>Email:</label> */}
//                 <input
//                   className="w-full border-2 border-gray-300 p-1 rounded-lg"
//                   type="text"
//                   name="email"
//                   placeholder="Your email"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="mt-4">
//                 {/* <label>password: </label> */}
//                 <input
//                   className="w-full border-2 border-gray-300 p-1 rounded-lg"
//                   type="password"
//                   name="password"
//                   placeholder="Your password"
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="justify-center text-center  text-white">
//                 <button className="bg-orange-600 w-40 mt-4">submit</button>
//               </div>
//             </form>
//             <Link className="text-orange-600 text-center mt-4" to="/signup">
//               <p className="text-center underline">Create an account?</p>
//             </Link>
//           </div>

//           <div className="mt-6 text-xs ml-4 pt-4 pr-10 pb-6 relative">
//             <p className="text-orange-600">About</p>
//             <h1 className="text-2xl p-2"> Evangadi Networks Q&A</h1>
//             <p className="">
//               {" "}
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
//               porttitor congue massa. Fusce posuere, magna sed pulvinar
//               ultricies, purus lectus malesuada libero.{" "}
//             </p>
//             <p className="pt-2">
//               {" "}
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
//               porttitor congue massa. Fusce posuere, magna sed pulvinar
//               ultricies, purus lectus malesuada libero.{" "}
//             </p>
//             <p className="pt-2">
//               {" "}
//               Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
//               porttitor congue massa. Fusce posuere, magna sed pulvinar
//               ultricies, purus lectus malesuada libero.{" "}
//             </p>
//             <div className="  text-white">
//               <button className="bg-orange-600 w-40 mt-4 h-6">
//                 How it works
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="flex justify-evenly p-6 bg-gray-800 text-white">
//         <div>
//           <img className="h-4 font-white" src={logo} alt="evangadi logo" />
//         </div>
//         <div>
//           <h1>Useful Links</h1>
//           <p className="text-xs text-gray-400 pt-1 hover:text-white">How it works</p>
//           <p className="text-xs text-gray-400 pt-1 hover:text-white"> term of service</p>
//           <p className="text-xs text-gray-400 pt-1 hover:text-white">privacy policy</p>
//         </div>
//         <div>
//           <h1>Contact Info</h1>
//           <p className="text-xs text-gray-400 pt-1">Evangadi networks</p>
//           <p className="text-xs text-gray-400 pt-1">support@evangadi.com</p>
//           <p className="text-xs text-gray-400 pt-1">Phone number</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login

import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import axios from "axios";
// import { IconButton } from "@mui/material";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import QuestionsList from "../Questions/QuestionsList";
import LandingPage from "../LandingPage/LandingPage";
import './Login.css'

const Login = () => {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  // const [type, setType] = useState("password");
  // const [visibility, setVisibilitiy] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  //Password visiblity

  // const handleToogle = () => {
  //   if (type === "password") {
  //     setVisibilitiy(true);
  //     setType("text");
  //   } else {
  //     setVisibilitiy(false);
  //     setType("password");
  //   }
  // };
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
                {/* <label>Email: </label> <br/> */}
                <input
                  placeholder="Your Email"
                  type="text"
                  name="email"
                  onChange={handleChange}
                />
                <br /> <br />
                {/* <label>Password: </label> */}
                <input
                  placeholder="Your Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                />
                <br /> <br />
                <button>Submit</button>
              </form>
              <br />
              <Link className="CrtAct" to="/signup">
                Create an account?
              </Link>
            </div>
          </>
        }
      />
    </>
  );
};
export default Login;