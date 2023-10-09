
import {useEffect,useState} from "react"


import "./index.css"

const fp={
    loading:"load",
    success:"success",

}

const FilterJobs=(props)=>{
  
    const[name,setProfile]=useState({
        status:"initial",
        data:null,
    })

    useEffect(()=>{
        const userProfile=async()=>{
            setProfile({status:fp.loading,data:null})
            const url="https://apis.ccbp.in/profile"
            
            const options={
                method:"GET",
                headers:{
                    Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU'
                }
            }

            const response=await fetch(url,options)
            const data1=await response.json()
          
            if(response.ok===true){
            setProfile(prevName=>({...prevName, status:fp.success,data:data1}))
            }
        }
        userProfile()
    },[])


    const loadingView=()=>{
        return(
            <p className="l">Loading</p>
        )
    }

    const success=()=>{
        const{data}=name 
  
        const a={
            name:data.profile_details.name,
            profile:data.profile_details.profile_image_url,
            bio:data.profile_details.short_bio,
        }
            
            
            return(
                <div className="proMan">
                    <div className="manCard">
                        <img src={a.profile} alt="profile" className="ph"/>
                        <h4>{a.name}</h4>
                        <p>{a.bio}</p>
                        
                    </div>
                    <hr className="hLine"/>
                       
                      

                </div>
            )

    }


   const profileDisplay=()=>{
const {status}=name
switch(status){
    case fp.loading:
        return loadingView()
    case fp.success:
        return success()
    default:
        return null
}
   }


    return(
        <div className="filterContainer">
            {profileDisplay()}
        </div>
    )
}

export default FilterJobs