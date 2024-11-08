import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx'
import LoadTheme from './components/LoadTheme.jsx';
import LoadQuestions from './components/LoadQuestions.jsx';




const router = createBrowserRouter([
  {
  path:'/',
  element:<App />,
  children:[
    {path:'/themes',
    element:<LoadTheme/>,
    },
    {
      path:'/questions/:question_id',
      element:<LoadQuestions/>,
    }
  ]
}])

createRoot(document.getElementById('root')).render(


<RouterProvider router = {router}/>
    

)
