import React from 'react'
import {
  useRedirectFunctions,
  withAuthInfo,
  useLogoutFunction,
} from "@propelauth/react";

function index() {

  const logoutFunction = useLogoutFunction();
  return (
    <div>
      <button onClick={logoutFunction}>die</button>
    </div>
  );
}

export default index