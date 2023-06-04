import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderLogin from "@/components/HeaderLogin";
import NavbarLogin from "@/components/NavbarLogin";
import Main from '@/components/Main'
import {
  withAuthInfo,
} from "@propelauth/react";

const Home = withAuthInfo((props) => {
 

  if (props.isLoggedIn) {
    return (
      <div>
        <HeaderLogin />
        <NavbarLogin />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Main />
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
