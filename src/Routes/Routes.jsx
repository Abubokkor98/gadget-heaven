import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Components/Statistics";
import Dashboard from "../Components/Dashboard";
import History from "../Components/History";
import Category from "../Components/Category";



const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/category/:categoryId",
            element:<Category></Category>,
          },
        ],
        },
        
        {
          path: "/statistics",
          element: <Statistics></Statistics>,
        },
        {
          path: "/dashboard",
          element: <Dashboard></Dashboard>,
        },
        {
          path: "/history",
          element: <History></History>,
        },
      ]
      
      
    },
  ]);


  export default routes;