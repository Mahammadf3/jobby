import { useContext } from "react"
import { GlobalInfo } from "../App"

const Land=()=>{
    const{value}=useContext(GlobalInfo)
  
    return(
    <div>
        <p>{value}</p>
    </div>
    )
}

export default Land