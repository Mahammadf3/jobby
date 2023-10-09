import { createContext,useState } from "react"

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import SingleJob from "./components/SingleJob"

import Home from "./components/Home"

import HomeCard from "./components/HomeCard"
import Card from "./components/Card"


import "./App.css"

 export const GlobalInfo=createContext()

const App=()=>{

   

  const onActive=(h)=>{
    setName((prevName) => ({ ...prevName, a: [...prevName.a, h] }));
  }


const[name,setName]=useState({a:[],b:"hi", onActive:onActive})




  return(
    <GlobalInfo.Provider value={{value:name}}>
  <Router>
  
    <Routes>
   
      <Route path="/jobs" element={<Home/>}/>
      <Route path="/" element={<HomeCard/>}/>
      <Route path="/jobs/:id" element={<SingleJob/>}/>
      <Route path="/cart" element={<Card/>}/>
   
  
    </Routes>
  </Router>
  </GlobalInfo.Provider>
  )
}

export default App