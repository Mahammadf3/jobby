import {useEffect,useState,useContext} from "react"
import { useParams } from "react-router-dom"
import { GlobalInfo } from "../../App"
import{Link} from "react-router-dom"


import Header from "../Header"

import "./index.css"
const finalData={
    loading:"loading",
    success:"success",
}

const SingleJob=()=>{

  const params=useParams();
  const {value}=useContext(GlobalInfo)
  const {onActive}=value
  

  const [data1,setFetch1]=useState({a:"inital",data:null,skillData:null,similarData:null})
  

    useEffect(()=>{
      
        const appleData=async()=>{
            setFetch1({a: finalData.loading,data:null,skillData:null,similarData:null})
            const url=`https://apis.ccbp.in/jobs/${params.id}`
            const options={
                method:"GET",
                headers:{
                    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU",
                }
            }

            const response=await fetch(url,options)
            const data=await response.json()
           
            if(response.ok===true){

          
            const fetch1={
                logo:data.job_details.company_logo_url,
                web:data.job_details.company_website_url,
                empType:data.job_details.employment_type,
                id:data.job_details.id,
                description:data.job_details.job_description,
                description2:data.job_details.life_at_company.description,
                imgUrl:data.job_details.life_at_company.image_url,
                location:data.job_details.location,
                package:data.job_details.package_per_annum,
                rating:data.job_details.rating,

                title:data.job_details.title,
                
            }
            const fetch2=data.job_details.skills.map(eachItem=>({
                skill:eachItem.image_url,
                name:eachItem.name,
            }))
const fetch3=data.similar_jobs.map(eachItem=>({
    similarJobsUrl:eachItem.company_logo_url,
    employee2type:eachItem.employment_type,
    id:eachItem.employment_type,
    jobDescription:eachItem.job_description,
    location:eachItem.location,
    rating:eachItem.rating,
    title:eachItem.title,

}))
setFetch1(prevData1=>({...prevData1,a:finalData.success,data:fetch1,skillData:fetch2,similarData:fetch3}))

            }
        }
        appleData()
    },[params.id])

    const load=()=>{
        return (
            <p className="hello">loading</p>
        )
    }

    const successCard=()=>{
        

        const onSave=()=>{
            onActive(data1.data)
        }


   
        const {data,skillData,similarData}=data1
        return(
            <div className="similarCard"> 
            <div className="logoCard">
            <img src={data.logo} alt="logo" className="facebook"/>
            <div className="saveCard">
            <div className="details">
                <h3 className="hello">{data.title}</h3>
                <p className="hello">{data.rating}</p>
            </div>
            <Link to="/cart">
            <button type="button"  onClick={onSave}>Save to apply</button>
            </Link>
            </div>
            </div>
            <div className="barPack">
            <div className="location">
            <p className="hello">{data.location}</p>
            <p className="hello">{data.empType}</p>
            </div>
            <p className="hello">{data.package}</p>
            </div>
            <hr className="packLine"/>
            <h3 className="hello">Description</h3>
            <p className="hello">{data.description}</p>
            <h3 className="hello">
                Skills
            </h3>
            <div className="skillImages">
            {skillData.map(eachItem=>
            <div className="hiSkill" key={eachItem.skill}>
              
                    <img src={eachItem.skill} alt="skill" className="amazon"/>
                    <p className="hello">{eachItem.name}</p>
                </div>

                )}
                </div>
                <h3 className="hello">Life at Company</h3>
                <div className="lifeCard">
                <p className="hello">{data.description2}</p>
                <img src={data.imgUrl} alt="websiteLogo"/>
                </div>
                <h3 className="hello">Similar jobs</h3>
                <div className="similarFace">
                    {similarData.map(eachItem=>
                        <div className="finalCard" key={eachItem.id}>
                            <div className="helloLastCard">
                            <img src={eachItem.similarJobsUrl} alt="similarjobUrl" className="finalEmo"/>
                            <div className="rateCard">
                            <h3 className="hello">{eachItem.title}</h3>
                            <p className="hello">{eachItem.rating}</p>
                            </div>
                            </div>
                            <h3 className="hello">
                                Description
                            </h3>
                            <p className="hello">{eachItem.jobDescription}</p>
                        </div>

                    )}
                </div>
            </div>
        )
 
      
    }

    const getFetch=()=>{
        const{a}=data1
        switch(a){
            case finalData.loading:
                return load()
            case finalData.success:
                return successCard()
            default:
                return null
        }
    }


    return(
        <div className="partContainer">
            <Header/>
           {getFetch()}
        </div>
    )
}

export default SingleJob