import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { TRAILOR_PIC } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleBtnClick = (e) => {
    e.preventDefault();

    // Validate the form data

    const message = checkValidData(
      isSignInForm,
      email.current?.value,
      password.current?.value,
      name.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up

      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current?.value,
            photoURL:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTffEKFCCusOFWVjR5PTIqzNzlHfzwbLa_J5g&s",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + "- " + errorMessage);
        });
    } else {
      // Sign in

      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={TRAILOR_PIC}
          alt="background"
        />
      </div>
      <form className="absolute w-3/12 bg-black p-12 my-26 mx-auto right-0 left-0 text-white rounded-lg opacity-80">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="p-4 my-4 w-full bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email or phone number"
          className="p-4 my-4 w-full bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Enter password"
          className="p-4 my-4 w-full bg-gray-800"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          type="submit"
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleBtnClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already registered? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
