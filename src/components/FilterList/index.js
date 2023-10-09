import "./index.css"




  



  const FilterList=(props)=>{

    const {onActiveData,data}=props
    const{label, employmentTypeId}=data
    
  const empType=()=>{
    onActiveData(employmentTypeId)
  }

    return(
        <div className="emp">
        
            <p className="fillTime"  onClick={empType}>{label}</p>
  


</div>
    )
  }

  export default FilterList