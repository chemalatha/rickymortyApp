import React,{Component} from 'react';
import CharacterDetails from './CharacterDetails';
import AllFilters from './AllFilters';
import SelectedFilterRow from './SelectedFilterRow';
const url= 'https://rickandmortyapi.com/api/character/';

class Home extends Component{
    constructor(){
        super();
        this.state = {
            characters:[],
            filteredChars:[],
            availableFilters:{"gender":[],"species":[]},
            selectedFilters:[]
        }
    }
    
    getAvailableFilterOptions(results){
        let availableFilters = this.state.availableFilters;
        results.forEach((element)=> {
            Object.keys(element).forEach((e)=>{
                if(Object.keys(availableFilters).indexOf(e)!=-1 && availableFilters[e].indexOf(element[e])==-1) availableFilters[e].push(element[e]);
            });
        });
        this.setState({availableFilters:availableFilters});
    }
    componentDidMount(){
        fetch(url,{method:'GET'})
            .then(res=>res.json())
            .then((res)=>{
                this.setState({characters:res.results,filteredChars:res.results});
                this.getAvailableFilterOptions(res.results);
            })
    }
    sortItems = (e)=>{
        console.log(e.target.value);
        let sortOrder = e.target.value;
        let allChars = this.state.characters;
        allChars.sort((a,b)=>{
            if(sortOrder == "asc") return a.id-b.id;
            else return b.id-a.id;
        });
        this.setState({filteredChars:allChars});
    }

    filterCharacters = (filterName,filterOption,checked)=>{
        let allChars = this.state.filteredChars;
        if(checked){
            allChars = allChars.filter((char)=>{
                return char[filterOption.toLowerCase()].toLowerCase() === filterName.toLowerCase();
            });
            this.setState({filteredChars:allChars});
            let selectedFilters = this.state.selectedFilters;
            this.setState({selectedFilters:selectedFilters.concat(filterName)})            
        } else{
            this.setState({filteredChars:this.state.characters})
        }
    }
    removeFilter(filterName){
        console.log(filterName);
        let selectedFilters = this.state.selectedFilters;
        selectedFilters.splice( selectedFilters.indexOf(filterName), 1 );
        this.setState({selectedFilters:selectedFilters});

    }
    render(){
        const renderCharacters = (characters)=>{
            return characters.map(character=>{
                return (
                    <CharacterDetails key={character.id} character={character} />
                )
            })
        }
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                        <AllFilters onSelectedFilter={(filterName,filterOption,checked)=>{this.filterCharacters(filterName,filterOption,checked)}} filters={this.state.availableFilters}/>
                    </div>
                    <div className="col-sm-10">
                    <div className="row">
                        <SelectedFilterRow filterNames={this.state.selectedFilters} removeFilter={this.removeFilter.bind(this)}/>
                    </div>
                    <div className="row">
                    <select onChange={this.sortItems.bind(this)} style={{border:"1px solid black",padding:"10px",float:"right"}}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                    </div>
                    <br />
                    <br/>
                    <div>
                    <div className="container-fluid">
                        <div className="row">
                        {renderCharacters(this.state.filteredChars)}
                        </div>
                        
                    </div>
                    </div>
                    </div>

                </div>

            </div>

        )
    }
}

export default Home;