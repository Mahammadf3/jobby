import {Link} from "react-router-dom"
import "./index.css"

const AllJobs=(props)=>{
const {dis}=props
const{ id,
    logo,
    type,
    description,
    location,
    rating,
    title,pack}=dis

return(
    <Link to={`/jobs/${id}`} className="linkColor">
    <div className="card">
        <div className="cardHead">
        <img src={logo} alt={`logo${id}`} className="jobLogo"/>
        <div>
        <h3>{title}</h3>
        <p>{rating}</p>
        </div>
        </div>
        <div className="spacePck">
        <div className="jobtypes">
        <p>{location}</p>
        <p>{type}</p>
        </div>
       <p>{pack}</p>
       </div>
        <hr className="line"/>
        <h3>Description</h3>
        <p>{description}</p>
    </div>
    </Link>
)

}

export default AllJobs