import React from 'react';
import SelectedFilter from './SelectedFilter';

const SelectedFilterRow = ({filterNames,removeFilter})=>{
    const renderFilters = (filterNames)=>{
        return filterNames.map((filter)=>{
            return (
                <SelectedFilter filterName={filter} removeFilter={(filter)=>removeFilter(filter)}/>
            )
        }
            
        );
    }
    return(
        <div>
            <h3>Selected Filters</h3>
            <div>
                {renderFilters(filterNames)}
            </div>
        </div>


    )
}

export default SelectedFilterRow;