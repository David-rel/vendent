import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeaderLogin from "@/components/HeaderLogin";
import NavbarLogin from "@/components/NavbarLogin";
import Landing from '@/components/Landing';
import Main1 from '@/components/Main1'
import {
  withAuthInfo,
} from "@propelauth/react";

const Home = withAuthInfo((props) => {
 

  if (props.isLoggedIn) {
    return (
      <div>
        <HeaderLogin />
        <NavbarLogin />
        <Main1 />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <Landing />
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
