import { createBrowserRouter } from "react-router-dom";


import Home from "../pages/home";
import Login from "../pages/login";
import Admin from "../pages/admin";
import Register from "../pages/register";
import Profile from "../pages/profile";
import CreateProfile from "../pages/createprofile";

 



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/createprofile",
    element: <CreateProfile />,
  },

]);
export default router;