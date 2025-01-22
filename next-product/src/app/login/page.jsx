"use client";

import React from "react";
import Cookies from "js-cookie";

export default function Login() {
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [termsAccepted, setTermsAccepted] = React.useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if username and password are not empty
    if (!username || !password) {
      alert("Username and password are required.");
      return;
    }

    console.log("username: ", username, "password: ", password);

    try {
      const res = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }), // Adjust if other fields are required
      });

      // Check for successful response
      if (!res.ok) {
        const errorData = await res.text(); // Capture the error response body
        console.log("Error response:", errorData);
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      console.log(data); // Log entire response data to inspect it

      // Check if the response contains a token (adjust based on actual response structure)
      if (data.token) {
        Cookies.set("auth_token", data.token, { expires: 7 });
        console.log("Token stored in cookies!");
        alert("Login successful!"); // Alert on success
      } else {
        alert("Login failed! No token received.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Login failed! Error during login. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="terms"
              type="checkbox"
              checked={termsAccepted}
              onChange={() => setTermsAccepted(!termsAccepted)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600"
              required
            />
          </div>
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            I agree to the terms and conditions
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
}