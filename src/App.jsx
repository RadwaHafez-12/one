
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Components/Layout/Layout'
import { Info } from './Components/Info/Info'
import { Home } from './Components/Home/Home'
import { Blog } from './Components/Blog/Blog';
import Notfound from './Components/Notfound/Notfound'
import { BlogDetails } from "./Components/BlogDetails/BlogDetails"


export function App() {

  const router =createBrowserRouter([
    {path:"" , element:<Layout/> ,children:
      [
        {index:true ,element:<Home/>},
        {path:"home" ,element:<Home/>},
        {path:"info" ,element:<Info/>},
        {path:"blog" ,element:<Blog/>},
        {path:"blog/:id" ,element:<BlogDetails/>},
        ,{path:"*" ,element:<Notfound/>}

       
      ]
     }

      
    
      

    
  ])
 

  return <RouterProvider router={router}/>;
   
  
}


