import { useEffect,useState } from "react"

import Header from "../Header"

import AllJobs from "../AllJobs"

import FilterJobs from "../FilterJobs"


import FilterList from "../FilterList/index"
import FilterList1 from "../FilterList1"



import "./index.css"
const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const Home=()=>{
  const [apiResponse, setApiResponse] = useState({
    status: apiStatusConstants.initial,
    data: null,
    errorMsg: null,
  })
  const [userInput,setInput]=useState("")
  const[type,setFilter]=useState("FULLTIME")
  const[sal,setSallary]=useState("1000000")

    useEffect(()=>{
      setApiResponse({
        status: apiStatusConstants.inProgress,
        data: null,
        errorMsg: null,
      })
        const apiCall=async()=>{
            const url=`https://apis.ccbp.in/jobs?employment_type=${type},PARTTIME&minimum_package=${sal}&search=`
            const options = {
                method: 'GET',
                headers: {
                  Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU',
                },
              }
         
            const response=await fetch(url,options)
       
            const data=await response.json()
        
            if (response.ok) {
              setApiResponse(prevApiDetails => ({
                ...prevApiDetails,
                status: apiStatusConstants.success,
                data: data,
              }))
            }
        }
        apiCall()

    },[type,sal])

    

    const onActiveData=(id)=>{
      setFilter(id)
    }

    const onActiveData1=(id)=>{
      setSallary(id)
    }

    const userData=(event)=>{
      setInput(event.target.value)
    }

    const hello=()=>{

      const {data} = apiResponse
 
   
      const formattedLeaderboardData = data.jobs.map(eachUser => ({
        id: eachUser.id,
        logo: eachUser.company_logo_url,
        type: eachUser.employment_type,
        description: eachUser.job_description,
        location: eachUser.location,
        rating:eachUser.rating,
        title:eachUser.title,
        pack:eachUser.package_per_annum

   
      }))
      const j=formattedLeaderboardData.filter(eachItem=>
        eachItem.title.toLowerCase().includes(userInput.toLowerCase())
        )
     return j.map(eachItem=>
      <AllJobs dis={eachItem} key={eachItem.id}/>
      )
    }

    

    const load=()=>{
      return(
        <div>
          <p className="l1">loading view</p>
        </div>
      )
    }


    const fetchAllInfo=()=>{
      const {status} = apiResponse

      switch (status) {
        case apiStatusConstants.inProgress:
          return load()
        case apiStatusConstants.success:
          return hello()

        default:
          return null
      }
    }

    return(
      <div className="containerBlack">
        <Header/>
        <div className="laderContainer">
          <div className="filterSub">
            <FilterJobs/>
            {employmentTypesList.map(eachItem=>
                 <FilterList  data={eachItem} key={eachItem.label} onActiveData={onActiveData}/>
              )}
              <hr className="hhh"/>
              {salaryRangesList.map(eachItem=>
                <FilterList1 data={eachItem} key={eachItem.label} onActiveData1={onActiveData1}/>
                )}
      
         </div>
          <div className="searcData">
            <input type="search" className="mainSearch" onChange={userData}/>
      {fetchAllInfo()}
      </div>
      </div>
      </div>
    )
    
}


export default Home