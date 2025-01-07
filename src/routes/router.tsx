import { createBrowserRouter } from "react-router-dom";


import Home from "../pages/home";
import Login from "../pages/login";
import Admin from "../pages/admin";
import Register from "../pages/register";
import Profile from "../pages/profile";
import CreateProfile from "../pages/createprofile";

 



const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/createprofile",
    element: <CreateProfile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/profile/:id",
    element: <Profile />,
  },
  {
    path: "/admin/:id",
    element: <Admin />,
  },

]);
export default router;