import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import Addjob from "../pages/Addjob";
import ErrorPage from "../pages/ErrorPage";
import MyPostedJobs from "../pages/MyPostedJobs";
import UpdateJob from "../pages/UpdateJob";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            index: true,
            element: <Home></Home>,
            // loader: () => fetch(`http://localhost:5000/jobs`)
        },
        {
           path: '/job/:id',
           element: <JobDetails></JobDetails>,
           loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
          path: '/add-job',
          element: <Addjob></Addjob>,
          
        },
        {
         path : '/my-posted-jobs',
         element: <MyPostedJobs></MyPostedJobs>
        },
        {
          path: '/update/:id',
          element: <UpdateJob></UpdateJob>,
          loader: ({params}) => fetch(`http://localhost:5000/job/${params.id}`)
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

  export default router ;