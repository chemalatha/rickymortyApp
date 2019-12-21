import React from 'react';
import './CharacterDetails.css';

const CharacterDetails = ({character})=>{
    return(
        <div className="character col-sm-3">
            <img src={character.image} style={{width:"100px",height:"100px"}} alt="character image"/>
            <h2>{character.name}</h2>
            <h6>{character.id} {character.created}</h6>
            <ul>
                <li><span>Status</span>:<span>{character.status}</span></li>
                <li><span>Species</span>:<span>{character.species}</span></li>
                </ul>
        </div>
    )
}

export default CharacterDetails;