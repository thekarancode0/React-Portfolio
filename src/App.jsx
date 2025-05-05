
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import About from './components/About'
import Project from './components/Project'
import Contact from './components/Contact'
import Navbar from "./components/Navbar"
import AppLayout from "./components/Layout/AppLayout"
import { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext"

const router = createBrowserRouter([
  {path:'/',element:<AppLayout/>,children:[
    {path:'/',element:<Home/>},
    {path:'/about',element:<About/>},
    {path:'/contact',element:<Contact/>},
    {path:'/project',element:<Project/>}

  ]}
])
function App(){
  const {theme} = useContext(ThemeContext)
  return(
    <div className={`${theme?'bg-gray-800':'bg-stone-300'} ${theme?'text-white':'text-black'}`}>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
