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
import axios from "axios";
import UpdateAssignment from "../Pages/UpdateAssignment/UpdateAssignment";
import ViewAssignment from "../Pages/ViewAssignment/ViewAssignment";
import SubmitAssignment from "../Pages/SubmitAssignment/SubmitAssignment";

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
            element: <Assignments></Assignments>,
            loader: ()=>axios.get('http://localhost:5000/assignments')
        },
        {
            path: '/updateAssignment/:id',
            element: <UpdateAssignment></UpdateAssignment>,
            loader: ({params})=>axios.get(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path: '/viewAssignment/:id',
            element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
            loader: ({params})=>axios.get(`http://localhost:5000/assignment/${params.id}`)
        },
        {
            path: '/submitAssignment/:id',
            element: <PrivateRoute><SubmitAssignment></SubmitAssignment></PrivateRoute>,
        },
      ]
    },
  ]);

  export default router;