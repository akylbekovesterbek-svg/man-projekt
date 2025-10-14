import  { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signap from "./pages/SignUp";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login"


const myRouter = createBrowserRouter([
  { path: "/",
     element: <Layout /> 
    , children: [
        {
            path: "/",
            element: <Home />
        },
        { 
            path: "about", 
            element: <About />                              
        },
    { 
            path: "contact", 
            element: <Contact/>                              
        },
        { 
            path: "signUp", 
            element: <Signap />                              
        },
        { 
            path: "login", 
            element: <Login />                              
        },
       {
        path:"/wish",
        element:<Wishlist/>

       }
 ] },



]);

export default myRouter;