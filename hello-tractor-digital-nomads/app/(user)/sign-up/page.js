'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter

import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { useForm } from "react-hook-form";
import {  toast } from 'react-hot-toast';

export default function AuthCard() {
  const router = useRouter(); // Initialize useRouter
  const [showPassword, setShowPassword] = useState(false);
  const [hasAccount, setHasAccount] = useState(true);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      const endpoint = hasAccount ? "/api/signin" : "/api/signup";

      // Prepare the data based on whether it's signin or signup
      const formData = hasAccount ? {
        email: data.email,
        password: data.password
      } : {
        name: data.name,
        email: data.signupEmail,
        phone: data.phone,
        password:data.password
        // Add any additional signup fields here
      };

      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const responseData = await response.json();

      if (response.ok) {
        console.log(`${hasAccount ? 'Login' : 'Signup'} successful`, responseData);
        toast.success(`${hasAccount ? 'Login' : 'Signup'} successful`);
        router.push(hasAccount ? '/' : '/verification');
      } else {
        throw new Error(responseData.error || `Failed to ${hasAccount ? 'sign in' : 'sign up'}`);
      }

      // You might want to handle the successful signup differently
      if (!hasAccount) {
        // Automatically switch to login form after successful signup
        setHasAccount(true);
      }

      reset(); // Clear form
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      {/* Split Background */}

      <div className="absolute inset-0 flex">
        {/* Left Side with Pink Background and Image */}
        <div className="w-1/2 bg-primary relative flex items-center justify-center">
          <img
            src="/AzizaGesture1.png"
            alt="Left Side Image"
            className="object-contain w-3/4 h-auto"
            style={{ maxHeight: "80%" }}
          />
        </div>

        {/* Right Side with White Background and Image */}
        <div className="w-1/2 bg-white relative flex items-center justify-center">
          <img
            src="/GitongaGesture1.png"
            alt="Right Side Image"
            className="object-contain w-full h-auto"
            style={{ maxHeight: "60%" }}
          />
        </div>

        <div className="absolute top-4 left-4">
          <img
            src="/HT_LOGO_RGB_white 1.png"
            alt="Logo"
            className="w-48 h-auto" /* Adjust width to size the logo */
          />
        </div>
      </div>



      {/* Auth Card */}
      <div className="z-10 p-8 w-[300px] lg:w-[500px] h-[600px] bg-white rounded-lg shadow-md">
        {/* Top Toggle Link */}
        <div className="text-right mb-6">
          {hasAccount ? (
            <>
              <span className="text-sm text-gray-500">No Account? </span>
              <button
                onClick={() => setHasAccount(false)}
                className="text-sm text-pink-500 hover:text-pink-600"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <span className="text-sm text-gray-500">Already have an account? </span>
              <button
                onClick={() => setHasAccount(true)}
                className="text-sm text-pink-500 hover:text-pink-600"
              >
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Dynamic Card Title */}
        <h1 className="text-2xl font-avenir font-extralight text-gray-900">Welcome to Hello Tractor</h1>
        <h2 className="text-5xl font-bold text-gray-900 font-merriweather">{hasAccount ? "Sign In" : "Sign Up"}</h2>

        {/* Dynamic Form */}
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          {hasAccount ? (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Enter your username or email address
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  type="email"
                  placeholder="Username or email address"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hibiscus"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">{errors.email.message}</span>
                )}
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <div className="relative">
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-hibiscus"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {!showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-gray-400" />
                    ) : (
                      <EyeIcon className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <span className="text-red-500 text-sm">{errors.password.message}</span>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-600">
                  Name
                </label>
                <input
                  {...register("name", {
                    required: "Name is required"
                  })}
                  type="text"
                  placeholder="Your full name"
                  className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
                {errors.name && (
                  <span className="text-red-500 text-sm">{errors.name.message}</span>
                )}
              </div>

              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    {...register("signupEmail", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.signupEmail && (
                    <span className="text-red-500 text-sm">{errors.signupEmail.message}</span>
                  )}
                </div>
                <div className="w-1/2 mb-4">
                  <label className="block text-sm font-medium text-gray-600">
                    Phone Number
                  </label>
                  <input
                    {...register("phone", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9+-]+$/,
                        message: "Invalid phone number"
                      }
                    })}
                    type="tel"
                    placeholder="Your phone number"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                  )}
                </div>
              </div>
              <div className="w-1/2">
                  <label className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters"
                      }
                    })}
                    type="password"
                    placeholder="Your password"
                    className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                  {errors.password && (
                    <span className="text-red-500 text-sm">{errors.password.message}</span>
                  )}
                </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="bg-hibiscus hover:bg-hibiscus w-full px-4 py-2 text-white rounded-lg disabled:opacity-50"
          >
            {loading ? "Loading..." : (hasAccount ? "Sign In" : "Sign Up")}
          </button>
        </form>

        {/* Social Login Options */}
        <div>
          <div className="flex items-center my-4">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <img
                className="w-5 h-5 mr-2"
                src="google.png"
                alt="Google"
              />
              {hasAccount ? "Sign In with Google" : "Sign Up with Google"}
            </button>
            <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
              <img
                className="w-5 h-5 mr-2"
                src="Facebook.png"
                alt="Facebook"
              />
              {hasAccount ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div>
//       <Tractor />
//     </div>
//   );
// }
