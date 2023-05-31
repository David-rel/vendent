import React from 'react'
import {
  useRedirectFunctions,
  withAuthInfo,
  useLogoutFunction,
} from "@propelauth/react";

function Profile() {

  const logoutFunction = useLogoutFunction();
  return (
    <div>
      <button onClick={logoutFunction}>die</button>
    </div>
  );
}

export default Profile





