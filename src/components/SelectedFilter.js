import React from 'react';

const SelectedFilter = ({filterName,removeFilter})=>{
    return(
        <div>
            {filterName}
            <button onClick={(e)=>{removeFilter(filterName)}}>X</button>
        </div>
    )
}

export default SelectedFilter;