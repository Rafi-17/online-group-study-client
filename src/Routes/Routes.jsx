import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Assignments from "../Pages/Assignments/Assignments";
import CreateAssignment from "../Pages/CreateAssignment/CreateAssignment";
import PrivateRoute from "./PrivateRoute";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/createAssignment',
            element: <PrivateRoute>
                <CreateAssignment></CreateAssignment>
            </PrivateRoute>
        },
        {
            path: '/assignments',
            element: <Assignments></Assignments>
        },
      ]
    },
  ]);

  export default router;