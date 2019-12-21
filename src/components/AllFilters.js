import React from 'react';
import Filter from './Filter';

const AllFilters = ({filters,onSelectedFilter})=>{
    const renderAllFilters = (allFilterDetails) => {
        console.log(allFilterDetails);
        if(allFilterDetails){
            return Object.keys(allFilterDetails).map((filterName)=>{
                return(
                    <Filter key={filterName} onSelectedFilter={(name,val,checked)=>onSelectedFilter(name,val,checked)} filterName={filterName} filterOptions={allFilterDetails[filterName]} />
                )
            });
        }


        }



    return(
        
        <div>{renderAllFilters(filters)}</div>
        
    )
}

export default AllFilters;