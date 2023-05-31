import { useRedirectFunctions, withAuthInfo, useLogoutFunction } from "@propelauth/react";

const Home = withAuthInfo((props) => {
  const { redirectToLoginPage, redirectToSignupPage, redirectToAccountPage } =
    useRedirectFunctions();
  const logoutFunction = useLogoutFunction();

  // isLoggedIn and user are injected automatically from withAuthInfo
  if (props.isLoggedIn) {
    return (
      <div>
        <p>You are logged in as {props.user.email}</p>
        <button onClick={redirectToAccountPage}>Account</button>
        <button onClick={logoutFunction}>Logout</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not logged in</p>
        <button onClick={redirectToLoginPage}>Login</button>
        <button onClick={redirectToSignupPage}>Signup</button>
      </div>
    );
  }
});

export default Home;
