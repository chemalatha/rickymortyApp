import React from 'react';

const Filter = ({filterName,filterOptions,onSelectedFilter})=>{
    const renderOptions  = (filterVals)=>{
        return(
            filterVals.map((f)=>{
            return (
                <div>
                    <input key={f} onChange={(e)=>onChecked(e)} type="checkbox" name={f} value={f} />{f}
                </div>
                
            )
        })
        )
    };
    const onChecked = function(e){
        console.log(e.target.value+filterName)
        onSelectedFilter(e.target.value,filterName,e.target.checked);
    }
    return(
        <div key={filterName} style={{border:"1px solid black",padding:"5px"}}>
            <div>{filterName}</div>
            {/* <select multiple onChange={(e)=>{onMultiSelect(e)}}> */}
                {renderOptions(filterOptions)}
            {/* </select> */}
        </div>
        
    )
}


export default Filter;