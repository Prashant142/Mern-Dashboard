import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { logo, background } from "../Assets/index";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const registerUser = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          role,
          password,
        }),
      });
      const data = await response.json();
      console.log(data); // Log the response data to the console
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
      }}>
      <div className="text-center mt-5">
        <img
          className="w-80 h-70 mb-15 mx-auto min-w-[150px]"
          src={logo}
          alt="logo"
        />
        <form onSubmit={registerUser} className="mx-auto mb-5 mt-4 max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mt-4 mb-2 text-gray-600 text-left">
              Register
            </h1>
            <p className="text-gray-500 text-left">
              Already have an account?{" "}
              <span
                onClick={(e) => navigate("/")}
                className="text-lime-500 cursor-pointer">
                Sign In
              </span>
            </p>
          </div>
          <div className="text-left">
            <span className="">Full Name</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              type="text"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="text-left">
            <span className="">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              type="email"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="text-left">
            <span className="">Role</span>
            <input
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="Role"
              type="text"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="text-left">
            <span className="">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              type="password"
              className="w-full px-4 py-4 border rounded-lg mb-4"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-lime-500 text-white py-2 px-4 rounded-sm">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
