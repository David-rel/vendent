import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderLogin from "@/components/HeaderLogin";
import NavbarLogin from "@/components/NavbarLogin";
import {
  useRedirectFunctions,
  withAuthInfo,
  useLogoutFunction,
} from "@propelauth/react";

import { useState } from "react";

const Home = withAuthInfo((props) => {
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } =
    useRedirectFunctions();
  const logoutFunction = useLogoutFunction();

  // isLoggedIn and user are injected automatically from withAuthInfo
  if (props.isLoggedIn) {
    return (
      <div>
        <HeaderLogin />
        <NavbarLogin />
        <Footer />
        <button onClick={logoutFunction}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
});

export default Home;


// github
//git add .
//git commit -m "<message>"
//git push

//git pull
