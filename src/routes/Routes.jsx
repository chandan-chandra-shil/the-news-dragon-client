import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";

import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";

const router = createBrowserRouter([

  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/category/:id',
        element:<Category></Category>
        
      }
    ]
  
  }
])

export default router;