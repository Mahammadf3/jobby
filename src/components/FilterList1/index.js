import "./index.css"


  const FilterList1=(props)=>{

    const {data,onActiveData1}=props
    const{label,salaryRangeId}=data
    
  const empType=()=>{
    onActiveData1(salaryRangeId)
  }

    return(
        <div className="emp">
        
            <p className="fillTime"  onClick={empType}>{label}</p>
  


</div>
    )
  }

  export default FilterList1