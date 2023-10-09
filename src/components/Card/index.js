import { useContext } from "react";
import { GlobalInfo } from "../../App";

import Header from "../Header"


import "./index.css"

const Card=()=>{
   
  
    const {value}=useContext(GlobalInfo)
  
    const {a}=value
  
    
  
 

    return(
        <div className="cardContainer3">
<Header/>

{a.map(eachItem=>
<div className="imgCart">
  <img src={eachItem.logo} key={eachItem.id} alt="logo" className="cartImg"/>
  <div className="description">
  <p>{eachItem.title}</p>
  <h3>Description</h3>
  <p>{eachItem.description}</p>
  </div>
  </div>
  )}
      
  
        </div>
    )
}

export default Card