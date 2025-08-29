import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  // const [email, setEmail] = useState("");
  // const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [passwordError, setPasswordError] = useState(null);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    console.log("Form submitted");
    e.preventDefault();
    if (name.trim() === "") {
      setNameError("Name is required.");
    } else {
      setNameError("");
    }

    if (name === "admin" && password === "123") {
      navigate("/dashboard");
    } else {
      alert("Invalid username or password");
    }

    // if (!email.includes(".") && !email.includes("@")) {
    //   setEmailError("Please enter a valid email address.");
    // } else {
    //   setEmailError("");
    // }
    // if (password !== confirmPassword) {
    //   setPasswordError("Passwords do not match.");
    // } else {
    //   setPasswordError("");
    // }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="w-1/4 text-center bg-white p-10  shadow-lg flex gap-8">
          <div className="w-full text-left">
            <h1 className="text-3xl font-bold mb-0">LOGIN</h1>
            <p className="text-gray-400">Enter your details below:</p>
            <form className="mt-4">
              <div className="mb-4">
                <label
                  className="block text-left mb-2 text-purple-800"
                  htmlFor="name"
                >
                  Username:
                </label>
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full p-2 bg-white border rounded border-black outline-none "
                  onChange={(e) => setName(e.target.value)}
                />
                {nameError && (
                  <p className="text-red-500 text-sm mt-1">{nameError}</p>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-left mb-2 text-purple-800">
                  Password:
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-full p-2 bg-white border rounded  outline-none active:border-purple-400"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="mt-4 bg-gray-700 text-white px-4 py-2 rounded hover:bg-black"
                onClick={(e) => handleSubmit(e)}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
