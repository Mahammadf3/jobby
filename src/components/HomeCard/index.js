import {Link} from "react-router-dom"

import Header from "../Header"

import "./index.css"

const HomeCard=()=><div className="containerHome">
    <Header/>
<div className="homeBody">
<h1 className="heading">Find The Job That Fits Your Life</h1>
<p className="heading">Millions of the peoples are searching for the jobs.company reviews.Find the jobs that fit for your ability and potential</p>
<Link to="/jobs">
<button type="button" className="homeButton">Find Jobs</button>
</Link>
</div>
</div>

export default HomeCard