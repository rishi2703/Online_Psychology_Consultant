
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Counsellors from './pages/Counsellors';
import  SingIn  from './pages/SingIn';
import Dashboard from './pages/Dashboard';
import AppLayout from './components/layout/Applayout';
import Confession from './pages/Confession';

import Register from './pages/Register';
function App() {
  const router = createBrowserRouter([
   
    {
      path:"/",
      element: <AppLayout/>,
      children:[
          
        {
          path:"/",
            element:<Dashboard/>,
          },
          {
            path:"/Dashboard",
              element:<Dashboard/>,
            },
          {
            path:"/Confession",
            element:<Confession/>,
          },
          {
            path:"/SingIn",
            element:<SingIn/>,
          },
          {
            path:"/Counsellors",
            element:<Counsellors/>,
          },
          
          {
            path:"/Register",
            element:<Register/>,
          },
      ],
    },
    
  ])

  return <RouterProvider router={router}/>
}

export default App
