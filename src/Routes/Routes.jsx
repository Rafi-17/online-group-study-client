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
import SubmittedAssignments from "../Pages/SubmittedAssignments/SubmittedAssignments";
import GiveMark from "../Pages/GiveMark/GiveMark";
import MyAssignments from "../Pages/MyAssignments/MyAssignments";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
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
            loader: ()=>axios.get('https://online-group-study-server-sand.vercel.app/assignments')
        },
        {
            path: '/updateAssignment/:id',
            element: <UpdateAssignment></UpdateAssignment>,
            loader: ({params})=>axios.get(`https://online-group-study-server-sand.vercel.app/assignment/${params.id}`)
        },
        {
            path: '/viewAssignment/:id',
            element: <PrivateRoute><ViewAssignment></ViewAssignment></PrivateRoute>,
            loader: ({params})=>axios.get(`https://online-group-study-server-sand.vercel.app/assignment/${params.id}`)
        },
        {
            path: '/submitAssignment/:id',
            element: <PrivateRoute><SubmitAssignment></SubmitAssignment></PrivateRoute>,
            loader: ({params})=>axios.get(`https://online-group-study-server-sand.vercel.app/assignment/${params.id}`)
        },
        {
            path: '/submittedAssignments',
            element: <PrivateRoute><SubmittedAssignments></SubmittedAssignments></PrivateRoute>,
            loader: ()=> axios.get("https://online-group-study-server-sand.vercel.app/submittedAssignments?status=pending")
        },
        {
            path:'/giveMark/:id',
            element:<GiveMark></GiveMark>,
            loader:({params})=> axios.get(`https://online-group-study-server-sand.vercel.app/submittedAssignment/${params.id}`)   
        },
        {
            path:'/myAssignments',
            element:<PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>, 
        },
      ]
    },
  ]);

  export default router;