import { Route, Routes } from 'react-router-dom'
import './App.css'
import {Add, Home, Single} from "./pages"


function App() {
 
  return (
   <Routes>
      <Route to={"/"} element={<Home/>}/>
      <Route to={"/Add"} element={<Add/>}/>
      <Route to={"/Single"} element={<Single/>}/>
   </Routes>
  )
}

export default App
