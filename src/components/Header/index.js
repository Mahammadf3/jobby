import {Link} from "react-router-dom"
import "./index.css"

const Header=()=>
<div className="headerContainer">
    
<img src="https://assets.ccbp.in/frontend/react-js/logo-img.png" alt="logo" className="headLogo"/>
<div className="headHome">
    <Link to="/">
    <p className="home1">Home</p>
    </Link>
    <Link to="/jobs">
    <p className="home1">Jobs</p>
    </Link>
</div>

</div>

export default Header
