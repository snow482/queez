import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import LoadTheme from './components/LoadTheme.jsx';





const router = createBrowserRouter([
  {
  path:'/',
  element:<App />,
  children:[
    {path:'/themes',
    element:<LoadTheme/>,
    }
  ]
}])

createRoot(document.getElementById('root')).render(


<RouterProvider router = {router}/>
    

)
